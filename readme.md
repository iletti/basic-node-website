# Node js pohjainen sivusto express frameworkilla ja ejs + ejs express layout dependenceillä. Myös body-parcer aktivoitu
# Pohjassa aktivoitu layout.ejs tiedosto, joka tuo html rakenteen, ja header sekä footer.ejs partialit jokaiselle sivulle
# index.ejs ja routes.js aktivoitu näyttämään placeholder etusivun
# lisää sivuja päivittämällä app.js tiedostoon app.use('/', require('./routes/sivunnimi')); luo uusi sivu.js routes kansioon ja sivu.ejs views kansioon.


# template sivu.js tiedostolle routes kansioon: 
```
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = {
    layout: 'layout',
    pageTitle: 'Sivun nimi',
    currentYear: new Date().getFullYear()
  };
  res.render('index', data);
});

/*router.post('/', (req, res) => {
  // Handle form submission
});*/

module.exports = router;
```

# itse sivu.ejs tiedosto luodaan views kansioon ja käytetään ainoastaan <body> </body> tagien valiin tulevaa koodia.