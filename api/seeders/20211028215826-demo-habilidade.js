'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Habilidades', [
      {
        habilidade: 'JavaScript',
        createdAt: new Date(),
        updatedAt: new Date(),
        icon: 'fa fa-fighter-jet'
      },
      {
        habilidade: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
        icon: 'fa fa-bicycle',
      },
      {
        habilidade: 'Python',
        createdAt: new Date(),
        updatedAt: new Date(),
        icon: 'fa fa-handshake-o',
      },
      {
        habilidade: 'C#',
        createdAt: new Date(),
        updatedAt: new Date(),
        icon: 'fa fa-ravelry'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
