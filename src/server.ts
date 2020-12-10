require('dotenv').config();
require('./mongodb/init');

const express = require('express');
const bodyParser = require('body-parser');

const rootRoutes = require('./routes/root');
const usersRoutes = require('./routes/users');
const errorHandler = require('./middlewares/errorHandler');

const port = process.env.SERVER_PORT;

const app = express();

app.use(bodyParser.json());
app.use(rootRoutes);
app.use(usersRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));

module.exports = app;
