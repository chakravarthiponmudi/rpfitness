const express = require('express');
const path = require('path');
const app = express()
app
  .use(express.static(path.join(__dirname, './public')))
  .set('views', path.join(__dirname, './views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/home'))
  

  module.exports = app;