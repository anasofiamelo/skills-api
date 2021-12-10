require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const database = require('../models/')

class LoginController {

    async index(req, res){
        const { user, senha } = req.body
        

        const userExist = await database.User.findOne({ where: {user: user}})
        try {
            const senhaMatch = await bcrypt.compare(senha, userExist.senha)
            if (!userExist){
                return res.status(400).send('USuário inválido')
            } else if (!senhaMatch ) {
                return res.status(400).send('Senha inválida')
            } else {
                const accessToken = jwt.sign( { id: userExist.id, user: userExist.user, nome: userExist.nome, email: userExist.email, admin: userExist.admin, profileDesc: userExist.profileDesc }, process.env.ACCESS_TOKEN_SECRET)
                res.header('Authorization', accessToken)
                return res.status(200).json({
                    user: {
                        id: userExist.id,
                        user: userExist.user,
                        email: userExist.email,
                        nome: userExist.nome,
                        profileDesc: userExist.profileDesc,
                        admin: userExist.admin,
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