const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./routerProxy');

// Middleware
app.use(morgan('tiny'));
app.use(express.static('./public'));

// Routes
app.use('/', router);

// 404
app.use((req, res, next) => {
  res.status(404);
  res.send({ error: 'Not Found' });
});

// Start server
const port = 1000;
app.listen(port, () => console.log(`App listening on port ${port}!`))