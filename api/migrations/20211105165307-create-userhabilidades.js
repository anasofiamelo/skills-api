'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserHabilidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_habilidades: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'habilidades',
            key: 'id'
        }
      },
      habilidade: {
        type: Sequelize.STRING,
        references: {
            model: 'habilidades',
            key: 'habilidade'
        }
      },
      user_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
            model: 'users',
            key: 'id'
        }
      },
      nivel: {
          type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserHabilidades');
  }
};
