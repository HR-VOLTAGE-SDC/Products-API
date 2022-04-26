const express = require("express");
const db = require('./db/index');
const app = express();
const PORT = 5000;
const router = require('./routes');

const morgan = require('morgan');


// set port
app.set('port', PORT);

// middleware
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('', router);


if (process.env.NODE_ENV !== 'test') {
  app.listen(5000, () => {
    console.log('server is listening on port 5000')
  });
}

module.exports = app;