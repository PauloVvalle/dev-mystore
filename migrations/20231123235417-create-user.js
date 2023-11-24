'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_email: {
        type: Sequelize.STRING
      },
      user_username: {
        type: Sequelize.STRING
      },
      user_password: {
        type: Sequelize.STRING
      },
      user_name: {
        type: Sequelize.STRING
      },
      user_phone: {
        type: Sequelize.STRING
      },
      user_city: {
        type: Sequelize.STRING
      },
      user_street: {
        type: Sequelize.STRING
      },
      user_number: {
        type: Sequelize.INTEGER
      },
      user_cep: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};