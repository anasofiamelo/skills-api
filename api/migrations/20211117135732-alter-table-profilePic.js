'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn('Users', 'profilePic', { type: Sequelize.STRING(10000) });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'profilePic', { type: Sequelize.STRING });
  }
};