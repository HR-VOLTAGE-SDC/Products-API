const { Pool } = require('pg');
const config = require('./../../config');

const pool = new Pool({
  user: config.USERDB,
  password: config.PW,
  database: config.DB,
  host: config.HOST,
  port: config.PORT
});

const db = pool.connect();

db
.then(() => console.log('connected to psql'))
.catch((err) => console.log('ERROR:', err))

module.exports = pool;