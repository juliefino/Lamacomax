const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    database: process.env.DATABASE,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 5432
})

module.exports = pool;