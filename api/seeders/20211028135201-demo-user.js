'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
    {
      user: 'anasouza02',
      nome: 'Ana Souza',
      senha: 'ola123',
      admin: false,
      email: 'ana@ana.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      user: 'marcoscintrajs',
      nome: 'Marcos Cintra',
      senha: 'ola123',
      admin: false,
      email: 'marcos@marcos.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user: 'anasofia',
      nome: 'Ana Sofia',
      senha: 'ola123',
      admin: true,
      email: 'sofiamelod@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user: 'sandrinha123',
      nome: 'Sandra Gomes',
      senha: 'ola123',
      admin: false,
      email: 'sandra@sandra.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user: 'paulamorais',
      nome: 'Paula Morais',
      senha: 'ola123',
      admin: false,
      email: 'paula@paula.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});
  }
};
