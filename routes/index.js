const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const business = {
      name: 'Placeholder Palvelut',
      address: '123 Esimerkkikatu',
      city: 'Esimerkkilä',
      state: 'Suomi',
      zip: '12345',
      phone: '050-555-1212',
      facebook: 'Placeholder Palvelut',
      twitter: '@ppalvelut',
      linkedin: 'ppalvelut'
    };
    const services = ['sijoittelu', 'sommittelu', 'tuumailu'];
    const testimonials = [
      { text: 'En ole nähnyt vaikuttavampaa esimerkkien asettelua', author: 'Jaana P.' },
      { text: 'Olin iloinen nähdessäni nämä asettelut', author: 'Jaska S.' }
    ];
    res.render('index', { business, services, testimonials });
  });

router.post('/', (req, res) => {
  // Handle form submission
});

module.exports = router;