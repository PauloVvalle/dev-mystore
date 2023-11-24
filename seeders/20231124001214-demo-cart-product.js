'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cart_products', [
      { cart_products_quantity: 2, cart_id: 1, product_id: 1 },
      { cart_products_quantity: 3, cart_id: 1, product_id: 2 },
      { cart_products_quantity: 1, cart_id: 2, product_id: 3 },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cart_products', null, {});
  }
};