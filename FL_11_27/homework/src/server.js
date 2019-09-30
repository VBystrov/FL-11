const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes.js');
const PORT = 3000;
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use('/', route);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
