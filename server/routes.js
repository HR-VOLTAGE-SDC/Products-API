const router = require('express').Router();
const controller = require('./controllers');

router.get('/products', controller.getProducts);

router.get('/products/:id', controller.getProduct);

router.get('/products/:id/styles', controller.getStyles);

router.get('/products/:id/related', controller.getRelated);

router.get('/loaderio-66f28c68e03209605324a77fe6714e8b.txt', controller.getLoader);

module.exports = router;