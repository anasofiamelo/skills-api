'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('Habilidades', 'icon', Sequelize.STRING);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropColumn('Habilidades', 'icon', Sequelize.STRING);
  }
};
