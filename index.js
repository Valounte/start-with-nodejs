const express = require('express');
const app = express();
const port = 3000;
const { Sequelize } = require('sequelize');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
