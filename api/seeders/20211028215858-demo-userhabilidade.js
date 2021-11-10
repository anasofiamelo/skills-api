'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('UserHabilidades', [
      {
        habilidade_id: 2,
        user_id: 1,
        nivel: 'Avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        habilidade_id: 1,
        user_id: 4,
        nivel: 'Avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        habilidade_id: 3,
        user_id: 3,
        nivel: 'Básico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        habilidade_id: 2,
        user_id: 3,
        nivel: 'Intermediário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        habilidade_id: 1,
        user_id: 2,
        nivel: 'Avançado',
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
