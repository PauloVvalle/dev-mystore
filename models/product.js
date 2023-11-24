'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    product_title: DataTypes.STRING,
    product_price: DataTypes.DECIMAL,
    product_description: DataTypes.TEXT,
    product_image: DataTypes.STRING,
    product_rate: DataTypes.DECIMAL,
    product_count: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false,
  });
  return Product;
};