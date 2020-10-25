export {};

const express = require('express');

const users = express.Router();

const getUsers = require('../controllers/users/getUsers');
const createUser = require('../controllers/users/createUser');
const deleteUser = require('../controllers/users/deleteUser');

users.get('/users', getUsers);
users.post('/users/create', createUser);
users.delete('/users/:id', deleteUser);

module.exports = users;
