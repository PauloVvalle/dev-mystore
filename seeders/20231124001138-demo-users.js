'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { user_email: 'usuario1@email.com', user_username: 'user1', user_password: 'senha123', user_name: 'João Silva', user_phone: '123-456-7890', user_city: 'São Paulo', user_street: 'Rua A', user_number: 123, user_cep: '12345678' },
      { user_email: 'usuario2@email.com', user_username: 'user2', user_password: 'senha456', user_name: 'Maria Souza', user_phone: '987-654-3210', user_city: 'Rio de Janeiro', user_street: 'Avenida B', user_number: 456, user_cep: '54321876' },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};