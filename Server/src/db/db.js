const Sequelize = require('sequelize')
require('dotenv').config();
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize('cs3_users', DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
}) 
module.exports = sequelize