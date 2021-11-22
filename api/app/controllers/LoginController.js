require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const database = require('../models/')

class LoginController {

    async index(req, res){
        const { user, senha } = req.body
        const userExist = await database.User.findOne({ where: {user: user}})
        const senhaMatch = await bcrypt.compare(senha, userExist.senha)

        try {
            if ( !userExist ){
                return res.status(400).send('Usuário não existe!')
            }

            else if ( !senhaMatch ) {
                return res.status(400).send('Senha inválida')

            } else {
                const accessToken = jwt.sign( { id: userExist.id, user: userExist.user, nome: userExist.nome, email: userExist.email, profileDesc: userExist.profileDesc }, process.env.ACCESS_TOKEN_SECRET)
                res.header('Authorization', accessToken)
                return res.status(200).json({
                    user: {
                        nome: userExist.nome,
                        id: userExist.id,
                        accessToken: accessToken
                    }
                })
            }

        } catch (error) {
            res.status(500).send(error.message)
        }

    }
}

module.exports = new LoginController();