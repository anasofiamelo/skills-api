'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('Users', 'profilePic', Sequelize.STRING);
      await queryInterface.addColumn('Users', 'profileDesc', Sequelize.STRING);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropColumn('Users', 'profilePic', Sequelize.STRING);
    await queryInterface.dropColumn('Users', 'profileDesc', Sequelize.STRING);
  }
};
