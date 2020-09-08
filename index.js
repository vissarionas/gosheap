const express = require('express');

const { homeCtrl } = require('./built/homeCtrl');

const app = express();
const port = 3000;

app.get('/', homeCtrl);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
