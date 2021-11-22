'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn('Users', 'profilePic', { type: Sequelize.STRING() });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'profilePic', { type: Sequelize.STRING });
  }
};