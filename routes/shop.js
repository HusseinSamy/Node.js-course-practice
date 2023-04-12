const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin.js')
router.get('/', (req, res, next) => {
  console.log('shop', adminData.products)
  res.render('shop.pug');
});

module.exports = router;
