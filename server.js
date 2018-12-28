const express = require('express');
const morgan = require('morgan');
const app = express();


// Middleware
app.use(morgan('tiny'));
app.use(express.static('./public'));

// 404
app.use((req, res, next) => {
  res.status(404);
  res.send({ error: 'Not Found' });
});

// Start server
const port = 1337;
app.listen(port, () => console.log(`App listening on port ${port}!`))