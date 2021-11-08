const bcrypt = require('bcrypt')
require('dotenv').config()

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class User extends Model {

    static associate(models) {
      
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