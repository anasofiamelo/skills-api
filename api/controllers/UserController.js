const database = require('../models');

class UserController {
    //pegar TODOS os usuarios da tabela
    static async pegaUsers(req, res){
        try {
        const todosUsers = await database.Users.findAll()
        return res.status(200).json(todosUsers)
        } catch (error) {
        return res.status(!200).json(error.message)
        }
    }

    //pegar UM usuário na tabela
    static async pegaUser(req, res){
        const { id } = req.params 
        try {
            const umUser = await database.Users.findOne(
                {where: 
                    {id: Number(id)}
                }
            )
            return res.status(200).json(umUser)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    //criar novo usuario
    static async criaUser(req, res){
        const novoUser = req.body
        try {
            const novoUserCriado = await database.Users.create(novoUser)
            return res.status(200).json(novoUserCriado)
        } catch (error) {
            return res.status(400).json(error.message)
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
            const userAtualizado = await database.Users.findOne(
                {where: {id: Number(id)}}
            )
            return res.status(200).json(userAtualizado)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    //deletar um registro
    static async deletaUser(req, res){
        const { id } = req.params
        try {
            await database.Users.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    static async pegaTodosUserHabilidades(req, res){
        const { userId } = req.params
        try {
        const UsersHabilidades = await database.UserHabilidades.findAll( {
            where: {
                user_id: Number(userId)
            }
        })
        return res.status(200).send(UsersHabilidades)
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
            return res.status(200).json()
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

}

module.exports = UserController;