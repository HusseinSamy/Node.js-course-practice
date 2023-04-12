const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product.pug');
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push(req.body);
  console.log('admin route', req.body)
  res.redirect('/');

});

module.exports = {
  router,
  products

}
  
