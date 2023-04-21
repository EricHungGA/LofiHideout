//variables
const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const app = express();

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('./config/checkToken'));


//home route
// app.use('/', require('./routes/home'))
//routes
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/categories', require('./routes/api/categories'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/users/sendform', ensureLoggedIn, require('./routes/api/users'));


//catch all
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handler to check if route exists
app.use(function (req, res) {
  console.log(`route: ${req.path} does not exist`);
  res.status(404, "route does not exist");
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


//listener
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});