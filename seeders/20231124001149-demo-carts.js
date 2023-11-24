'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carts', [
      { user_id: 1, cart_date: new Date(), cart_status: true },
      { user_id: 2, cart_date: new Date(), cart_status: true },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carts', null, {})
  }
};