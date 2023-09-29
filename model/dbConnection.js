const Sequelize = require('sequelize');
const msql2 = require('mysql2');

const sequelize = new Sequelize('Database', 'root', '', {
    host : 'localhost',
    dialect : 'mysql'
});