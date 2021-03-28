const express = require('express');
const router = express.Router();
const fs = require('fs');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get(`/get_menu`, async function(req, res) {

    let data = JSON.parse(fs.readFileSync('./db.json'))

    res.send(data.menu[req._parsedUrl.query]);
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About');
});

module.exports = router;