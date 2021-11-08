const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const database = require('../models');

class UserController {

    static Login(req, res){
        res.status(204).send()
    }
    //criar novo usuario
    static async criaUser(req, res){
        const novoUser = req.body
        try {
            const senhaHash = await database.User.gerarSenhaHash(novoUser.senha)
            const novoUserCriado = await database.User.create({...novoUser, senha: senhaHash})
            return res.status(200).json(novoUserCriado)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async logaUser(req, res){
        const token = criaTokenJWT(req.body.user)
        const user = await database.User.findOne({ where: {user: req.body.user }})
        const senha = bcrypt.compareSync(req.body.senha, user.senha)

        try {
            if (!user || !senha){
                return res.status(400).send('Usuario ou senha incorretos')}
            else {
                res.header('Authorization', token)
                res.status(200).json({
                    user: {
                        nome: user.nome,
                        token: token
                    }
                })
            }
            
        } catch (error) {
            res.status(400).json(error.message)
        }
    }

    //atualizar um registro
    static async atualizaUser(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Users.update(novasInfos, 
                {
                    where: {id: Number(id)} 
                })
            const userAtualizado = await database.User.findOne(
                {where: {id: Number(id)}}
            )
            return res.status(200).json(userAtualizado)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    //deletar um registro
    static async deletaUser(req, res){
        const { user } = req.params
        await database.User.destroy({where: {user: user}})
    }
    
    //pegar TODOS os usuarios da tabela
    static async pegaUsers(req, res){
        try {
        const todosUsers = await database.User.findAll()
        return res.status(200).json(todosUsers)
        } catch (error) {
        return res.status(!200).json(error.message)
        }
    }

    //pegar UM usuário na tabela
    static async pegaUser(req, res){
        const { user } = req.params 
        try {
            const usuario = await database.User.findOne(
                {where: 
                    {user: String(user)}
                }
            )
            return res.status(200).json(usuario)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    
    static async pegaHabilidadesUser(req, res){
        const { userId } = req.params
        try {
        const userHabilidades = await database.UserHabilidades.findAll( {
            where: {
                user_id: Number(userId)
            }
        })
        return res.status(200).send(userHabilidades)
        } catch (error) {
        return res.status(404).json(error.message)
        }
    }

    static async criaUserHabilidades(req, res){
        const { userId } = req.params
        const novoUserHabilidades = { ...req.body, user_id: Number(userId) }
        try {
            const novoUserHabilidadesCriado = await database.UserHabilidades.create(novoUserHabilidades)
            return res.status(200).json(novoUserHabilidadesCriado)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async apagaUserHabilidades(req, res){
        const { userId, id } = req.params
        try {
            await database.UserHabilidades.destroy({where: {id: Number(id)}})
            return res.status(200).send('user apagado com sucesso')
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

}

module.exports = UserController;