const express = require('express');

const db = require('./models');
const Condition = db.Condition;
const Item = db.Item;

const port = process.env.PORT || 4567;

const app = express();

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.listen(port, () => {
  db.sequelize.sync({ force: true });
  console.log(`Server listening on port: ${port}`);
});