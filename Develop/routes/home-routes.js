const path = require('path');
const app = require('express').Router();
const db = require('../db/db.json')

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

app.route('/api/notes')
  .get(function (req, res) {
    res.json(db)
  });

module.exports = app;