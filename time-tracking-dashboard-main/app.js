const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const data = require('./data.json');


//To use static files
app.use('/public', express.static('public'));

//Allow CORS
app.use(cors());


//Configuracion del template engine//
app.set('views', path.join(__dirname, 'views')) // indica al template engine donde buscar las vistas//
app.set('view engine', 'ejs')

app.get('/', (req, res, next) => {
  res.render('daily.ejs', { data })
});
app.get('/weekly', (req, res, next) => {
  res.render('weekly.ejs', { data })
});
app.get('/monthly', (req, res, next) => {
  res.render('monthly.ejs', { data })
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`)
});



module.exports = app;
