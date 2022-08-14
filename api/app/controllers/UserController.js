const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { QueryTypes } = require("sequelize");
const database = require("../models");

class UserController {
  static Login(req, res) {
    res.status(204).send();
  }
  static async criaUser(req, res) {
    const novoUser = req.body;
    try {
      const senhaHash = await database.User.gerarSenhaHash(novoUser.senha);
      const novoUserCriado = await database.User.create({
        ...novoUser,
        senha: senhaHash,
      });
      return res.status(200).json(novoUserCriado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async logaUser(req, res) {
    const token = criaTokenJWT(req.body.user);
    const user = await database.User.findOne({
      where: { user: req.body.user },
    });
    const senha = bcrypt.compareSync(req.body.senha, user.senha);

    try {
      if (!user || !senha) {
        return res.status(400).send("Usuario ou senha incorretos");
      } else {
        res.header("Authorization", token);
        res.status(200).json({
          user: {
            nome: user.nome,
            token: token,
          },
        });
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async atualizaUser(req, res) {
    const { user } = req.params;
    const novasInfos = req.body;

    try {
      const userAtualizado = await database.User.update(
        { ...novasInfos },
        { where: { user: String(user) } }
      );
      return res.status(200).json(userAtualizado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async deletaUser(req, res) {
    const { user } = req.params;
    await database.User.destroy({ where: { user: user } });
  }

  static async pegaUsers(req, res) {
    try {
      const todosUsers = await database.User.findAll();
      return res.status(200).json(todosUsers);
    } catch (error) {
      return res.status(!200).json(error.message);
    }
  }

  static async pegaUser(req, res) {
    const { userId } = req.params;
    try {
      const usuario = await database.User.findOne({
        where: { id: Number(userId) },
      });
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async pegaUserPorUsername(req, res) {
    const { user } = req.params;
    try {
      const usuario = await database.User.findOne({
        where: { user: String(user) },
      });
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async pegaHabilidades(req, res) {
    try {
      const habilidades = await database.sequelize.query(
        "select h.habilidade, u.id from userhabilidades uh inner join habilidades h on uh.habilidade_id = h.id inner join users u on u.id = uh.user_id",
        {
          type: database.sequelize.QueryTypes.SELECT,
        }
      );
      return res.status(200).send(habilidades);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async pegaHabilidadesUser(req, res) {
    const { userId } = req.params;
    try {
      const userHabilidades = await database.sequelize.query(
        "select h.habilidade, h.icon, u.id, uh.id as id_action, uh.nivel, uh.habilidade_id from userhabilidades uh inner join habilidades h on uh.habilidade_id = h.id inner join users u on u.id = uh.user_id where u.id = :userId;",
        {
          replacements: { userId },
          type: database.sequelize.QueryTypes.SELECT,
        }
      );
      return res.status(200).send(userHabilidades);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async criaUserHabilidades(req, res) {
    const { userId } = req.params;
    const novoUserHabilidades = { ...req.body, user_id: Number(userId) };
    try {
      const novoUserHabilidadesCriado = await database.UserHabilidades.create(
        novoUserHabilidades
      );
      return res.status(200).json(novoUserHabilidadesCriado);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async apagaUserHabilidades(req, res) {
    const { idAction } = req.params;
    try {
      await database.UserHabilidades.destroy({
        where: {
          id: Number(idAction),
        },
      });
      return res
        .status(200)
        .send("habilidade" + idAction + "apagado com sucesso");
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = UserController;
