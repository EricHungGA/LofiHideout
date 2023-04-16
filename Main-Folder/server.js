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

//home route
// app.use('/', require('./routes/home'))
//routes
app.use('/api/categories', require('./src/utilities/categories-api'));
app.use('/api/users', require('./routes/api/users'));
//catch all
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

//listener
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});