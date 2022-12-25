const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/index'));
app.use('/about', require('./routes/about'));


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});