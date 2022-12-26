const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = {
    layout: 'layout',
    pageTitle: 'Home',
    currentYear: new Date().getFullYear()
  };
  res.render('index', data);
});

/*router.post('/', (req, res) => {
  // Handle form submission
});*/

module.exports = router;