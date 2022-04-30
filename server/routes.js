const router = require('express').Router();
const controller = require('./controllers');

router.get('/products', controller.getProducts);

router.get('/products/:id', controller.getProduct);

router.get('/products/:id/styles', controller.getStyles);

router.get('/products/:id/related', controller.getRelated);

router.get('/loaderio-e81d1627d16a741b2666b317f8845bcf.txt', controller.getLoader);

module.exports = router;