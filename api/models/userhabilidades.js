'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserHabilidades extends Model {
    static associate(models) {
      models.User.belongsToMany(models.Habilidades, {through: UserHabilidades, foreignKey: 'user_habilidade'})
      models.Habilidades.belongsToMany(models.User, {through: UserHabilidades, foreignKey: 'user_id'})

      models.User.belongsToMany(models.Habilidades, {through: UserHabilidades, foreignKey: 'habilidade'})
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