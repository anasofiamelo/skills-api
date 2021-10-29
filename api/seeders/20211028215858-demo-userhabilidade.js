'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('UserHabilidades', [
      {
        tipo: '',
        user_habilidade: [2],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipo: '',
        user_habilidade: 1,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tipo: '',
        user_habilidade: 3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
    ])
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
