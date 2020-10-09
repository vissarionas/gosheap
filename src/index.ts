import * as express from 'express';

import home from './controllers/home';

const app = express();
const port = 3000;

app.get('/', home);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
