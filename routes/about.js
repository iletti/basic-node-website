const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('about');
});

router.post('/', (req, res) => {
  // Handle form submission
});

module.exports = router;