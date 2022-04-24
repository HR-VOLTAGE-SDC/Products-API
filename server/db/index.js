const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'mypass',
  database: 'products_api',
  host: 'localhost',
  port: 5432
});

module.exports = pool;