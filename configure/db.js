const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 10000
    }
});

module.exports = db;