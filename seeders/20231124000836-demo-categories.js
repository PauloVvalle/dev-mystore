'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {category_name: 'Eletronicos'},
      {category_name: 'livros'},
      {category_name: 'roupas'},
      {category_name: 'Móveis'},
      {category_name: 'Aliments'},
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    
      await queryInterface.bulkDelete('categories', null, {})
     
  }
};
