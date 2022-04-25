const express = require("express");
const db = require('./db/index');
const app = express();
const PORT = 5000;
const router = require('./routes');

const morgan = require('morgan');
const pool = require("./db/index");


// set port
app.set('port', PORT);

// middleware
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('', router);


app.listen(5000, () => {
  console.log('server is listening on port 5000')
});