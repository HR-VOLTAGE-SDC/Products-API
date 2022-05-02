const express = require("express");
const db = require('./db/index');
const app = express();
const PORT = 3000;
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
  app.listen(PORT, () => {
    console.log('server is listening on port 3000')
  });
}

module.exports = app;