'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      { product_title: 'Smartphone X1', product_price: 599.99, product_description: 'Um smartphone avançado com ótima câmera.', product_image: 'smartphone_x1.jpg', product_rate: 4.5, product_count: 100, category_id: 1 },
      { product_title: 'Camiseta Casual', product_price: 29.99, product_description: 'Uma camiseta confortável para uso diário.', product_image: 'camiseta_casual.jpg', product_rate: 4.0, product_count: 200, category_id: 2 },
      { product_title: 'Livro Aventuras Fantásticas', product_price: 19.99, product_description: 'Um livro emocionante de aventuras.', product_image: 'livro_aventuras.jpg', product_rate: 4.8, product_count: 50, category_id: 3 },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
};