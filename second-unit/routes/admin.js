const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/add-product', (request, response, next) => {
  response.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/add-product', (request, response, next) => {
  console.log("request: ", request.body);
  response.redirect('/');
});

module.exports = router;