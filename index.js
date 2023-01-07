const express = require('express');
const userRouter = require('./src/routes/User');
const bodyParser = require('body-parser');
var Sequelize = require("sequelize");
const app = express();
const port = 3000;
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use('/', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


