const express = require('express');
const app = express();
var expressLayouts = require('express-ejs-layouts');

const bodyParser = require('body-parser');

//asettaa ejs view enginen
app.set('view engine', 'ejs');

//aktivoi express ejs layoutin (lisää routes/kansiossa ja layouts.ejs tiedostossa)
app.use(expressLayouts);


app.use(bodyParser.urlencoded({ extended: false }));


//tähän alasivujen routes tiedostosijainnit 
app.use('/', require('./routes/index'));


//laittaa serverin kuuntelemaan porttia x, käynnistä $ node app.js komennolla
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});