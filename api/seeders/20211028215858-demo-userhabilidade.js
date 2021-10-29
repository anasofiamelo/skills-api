'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('UserHabilidades', [
      {
        nivel: 'Avançado',
        user_habilidade: 2,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Avançado',
        user_habilidade: 1,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Básico',
        user_habilidade: 3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Intermediário',
        user_habilidade: 2,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Avançado',
        user_habilidade: 1,
        user_id: 2,
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
