const express = require('express');

const ReadController = require('./controllers/ReadController');

const routes = express.Router();


routes.get('/load', ReadController.load);


module.exports = routes;