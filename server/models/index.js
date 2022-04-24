const db = require('../db');

module.exports = {
  getAllProducts: async (req) => {
    let queryString = 'SELECT * FROM products';
    await db.query(queryString, (err, results) => {
      callback(err, results);
    });
  },

  getProduct: async (req) => {
    const product_id = req.products.id;
    const product_info = {
      name: req.products.name,
      slogan: req.products.slogan,
      description: req.products.description,
      category: req.products.category,
      default_price: req.products.default_price
    };
    const features = {
      id: req.features.id,
      product_id: product_id,
      feature: req.features.id,
      value: req.features.value
    }

    let queryString = 'SELECT products information, and features for a given product id';

    await db.query(queryString, (err, results) => {
      callback(err,results);
    })
  }

  getStyles: async (req) => {
    let queryString = 'SELECT all styles for given product id';

    await db.query(queryString, (err, results) => {
      callback(err, results)
    })
  }

  getRelated: async (callback) => {
    let queryString = 'SELECT all related product ids for a given product id'

    await db.query(queryString, (err, results) => {
      callback(err, results)
    })
  }


}