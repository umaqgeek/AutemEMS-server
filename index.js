const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// initialize database and set of models
const db = require('./app/models/sequelize');

// accept json format from client-side
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json('application/json'));

// allow connection from any application from client-side
app.use(cors({credentials: true, origin: true}));

// starting server
const server = app.listen(8081, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server listening at http://%s:%s", host, port);
});

// call set of main router
require('./app/index')(app, db);