const express = require('express');
const router = express.Router();
const fs = require('fs');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get(`/get_menu`, async function (req, res) {
  let data = JSON.parse(fs.readFileSync('./db.json'))

  res.send(data.menu[req._parsedUrl.query.split('id=')[1]]);
});


router.get('/search', function (req, res) {
  let data = JSON.parse(fs.readFileSync('./db.json'))['menu'][req._parsedUrl.query.split("id=")[1]]
  
  let products = []
  for (let item in data) {
    for (let i = 0; i < data[item]['items'].length; i++) {
      if (data[item]['items'][i]['name'] == decodeURI(req._parsedUrl.query.split('name=')[1].split('&')[0])) {
        products.push(data[item]['items'][i]);
      }
    }
  }
  res.send({data: products});
});

// define the about route
router.get('/about', function (req, res) {
  res.send('About');
});


module.exports = router;