const express = require('express');
const suscriptionRouter = require('./api-src/routes/suscription.js');
const path = require('path');

const app = express();

app.use(express.json());
app.use(suscriptionRouter);
app.use(express.static(path.join(__dirname, 'client')))

module.exports = app;
