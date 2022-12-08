'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('symptomTrackers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      overallFeeling: {
        type: Sequelize.INTEGER
      },
      pain: {
        type: Sequelize.INTEGER
      },
      hoursOfSleep: {
        type: Sequelize.INTEGER
      },
      flare: {
        type: Sequelize.BOOLEAN
      },
      additionalNotes: {
        type: Sequelize.TEXT
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('symptomTrackers');
  }
};