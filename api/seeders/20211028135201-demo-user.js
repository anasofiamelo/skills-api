'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', [
    {
      user: 'anasouza02',
      nome: 'Ana Souza',
      admin: false,
      email: 'ana@ana.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      user: 'marcoscintrajs',
      nome: 'Marcos Cintra',
      admin: false,
      email: 'marcos@marcos.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user: 'anasofia',
      nome: 'Ana Sofia',
      admin: true,
      email: 'sofiamelod@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user: 'sandrinha123',
      nome: 'Sandra Gomes',
      admin: false,
      email: 'sandra@sandra.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user: 'paulamorais',
      nome: 'Paula Morais',
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
