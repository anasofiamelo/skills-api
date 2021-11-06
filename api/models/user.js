const bcrypt = require('bcrypt')

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    
    async adicionaSenha(senha){
      this.senhaHash = await User.gerarSenhaHash(senha)
    }

    static gerarSenhaHash(senha){
      const custoHash =  12;
      return bcrypt.hash(senha, custoHash);
    }
  };
  User.init({
    user: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};