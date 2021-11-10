'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHabilidades extends Model {
    static associate(models) {
      models.User.belongsToMany(models.Habilidades, {through: UserHabilidades, foreignKey: 'habilidade_id'})
      models.Habilidades.belongsToMany(models.User, {through: UserHabilidades, foreignKey: 'user_id'})

    }
  };
  UserHabilidades.init({
    nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserHabilidades',
  });
  return UserHabilidades;
};