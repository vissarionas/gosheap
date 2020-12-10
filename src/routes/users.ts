export {};

const express = require('express');

const users = express.Router();

const get = require('../controllers/users/get');
const create = require('../controllers/users/create');
const remove = require('../controllers/users/remove');

users.get('/users', get);
users.post('/users/create', create);
users.delete('/users/:id', remove);

module.exports = users;
