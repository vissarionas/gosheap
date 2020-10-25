export {};

const express = require('express');

const root = express.Router();
const health = require('../controllers/health');

root.get('/health', health);

module.exports = root;
