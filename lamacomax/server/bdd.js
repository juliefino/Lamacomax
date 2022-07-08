const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    database: process.env.DATABASE,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT
})

module.exports = pool;