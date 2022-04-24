const router = require('express').Router();
const controller = require('./controllers');

router.get('/products', controller.products.get);

router.get('products/:id', controller.product.get);

router.get('/products/:id/styles', controller.styles.get);

router.get('/products/:id/related', controller.related.get);