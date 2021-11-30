'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habilidades extends Model {

    static associate(models) {
    }
  };
  Habilidades.init({
    habilidade: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Habilidades',
  });
  return Habilidades;
};