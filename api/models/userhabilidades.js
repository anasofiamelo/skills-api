'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHabilidades extends Model {
    static associate(models) {
      models.Users.belongsToMany(models.Habilidades, {through: UserHabilidades, foreignKey: 'user_habilidade'})
      models.Habilidades.belongsToMany(models.Users, {through: UserHabilidades, foreignKey: 'user_id'})
    }
  };
  UserHabilidades.init({
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserHabilidades',
  });
  return UserHabilidades;
};