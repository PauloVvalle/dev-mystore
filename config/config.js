require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
};
//npx sequelize-cli init
//npx sequelize-cli model:generate --name User --attributes user_email:string,user_username:string,user_password:string,user_name:string,user_phone:string,user_city:string,user_street:string,user_number:integer,user_cep:string
//npx sequelize-cli model:generate --name Cartproduct --attributes cart_products_quantity:integer,cart_id:integer,product_id:integer
//npx sequelize-cli model:generate --name Cart --attributes user_id:integer,cart_date:date,cart_status:boolean
//npx sequelize-cli model:generate --name User --attributes user_email:string,user_username:string,user_password:string,user_name:string,user_phone:string,user_city:string,user_street:string,user_number:integer,user_cep:string
//npx sequelize-cli db:migrate
//npx sequelize-cli seed:generate --name demo-cart-product
//npx sequelize-cli seed:generate --name demo-cart-categories
//npx sequelize-cli seed:generate --name demo-cart-users
//npx sequelize-cli seed:generate --name demo-cart-carts
//npx sequelize-cli db:seed:all


