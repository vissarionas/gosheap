const express = require('express');
const bodyParser = require('body-parser');

const rootRoutes = require('./routes/root');
const usersRoutes = require('./routes/users');

const port = process.env.PORT;

require('./mongodb/init');

const errorHandler = require('./middlewares/errorHandler');

const app = express();

process.once('SIGUSR2', () => process.kill(process.pid));

app.use(bodyParser.json());

app.use(rootRoutes);
app.use(usersRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = app;
