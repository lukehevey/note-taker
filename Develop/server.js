const express = require('express')
const path = require('path');
const api = require('./routes/api-routes');
// const homeRoutes = require('./routes/home-routes');
const db = require('./db/db.json')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/', homeRoutes);
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.route('/api/notes')
  .get(function (req, res) {
    res.json(db)
  });

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

