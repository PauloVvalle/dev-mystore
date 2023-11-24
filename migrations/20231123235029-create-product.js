'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_title: {
        type: Sequelize.STRING
      },
      product_price: {
        type: Sequelize.DECIMAL
      },
      product_description: {
        type: Sequelize.TEXT
      },
      product_image: {
        type: Sequelize.STRING
      },
      product_rate: {
        type: Sequelize.DECIMAL
      },
      product_count: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};