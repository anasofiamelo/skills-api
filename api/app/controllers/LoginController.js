require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const database = require("../models/");
class LoginController {
  async index(req, res) {
    const { user, senha } = req.body;
    const userExist = await database.User.findOne({ where: { user } });
    try {
      const senhaMatch = await bcrypt.compare(senha, userExist.senha);
      if (!userExist) {
        return res.status(400).send("Usuário inválido");
      } else if (!senhaMatch) {
        return res.status(400).send("Senha inválida");
      } else {
        const userObject = {
          id: userExist.id,
          user: userExist.user,
          email: userExist.email,
          nome: userExist.nome,
          profileDesc: userExist.profileDesc,
          admin: userExist.admin,
        };

        const accessToken = jwt.sign(
          userObject,
          process.env.ACCESS_TOKEN_SECRET
        );

        res.header("Authorization", accessToken);

        return res.status(200).json({
          user: { ...userObject, accessToken },
        });
      }
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
}

module.exports = new LoginController();
