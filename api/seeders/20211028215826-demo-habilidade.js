'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Habilidades', [
      {
        habilidade: 'JavaScript',
        tipo: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        habilidade: 'Java',
        tipo: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        habilidade: 'Python',
        tipo: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        habilidade: 'C#',
        tipo: '',
        createdAt: new Date(),
        updatedAt: new Date()
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
