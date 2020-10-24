const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const port = process.env.PORT;

require('./mongodb/init');

const errorHandler = require('./middlewares/errorHandler');

const health = require('./controllers/health');

const getUsers = require('./controllers/users/getUsers');
const createUser = require('./controllers/users/createUser');
const deleteUser = require('./controllers/users/deleteUser');

const app = express();

process.once('SIGUSR2', () => process.kill(process.pid));

app.use(bodyParser.json());

router.get('/health', health);

router.get('/users', getUsers);
router.post('/users/create', createUser);
router.delete('/users/:id', deleteUser);

app.use(router);
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
