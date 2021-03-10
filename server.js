const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello 👋 World 🌎');
});

app.listen(3000, () => {
  console.log('app is running on port 3000');
});
