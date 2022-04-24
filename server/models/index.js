const db = require('../db');

module.exports = {
  getAllProducts: async (callback) => {
    let queryString = 'SELECT products.id, products.name, products.slogan, products.description, products.category, products.default_price FROM products'
    await db.query(queryString, (err, results) => {
      callback(err, results);
    });
  },

  getProduct: async (callback) => {
    // let queryString = 'SELECT all id row from products, features, related_products, styles'
  }

  getStyles: async (callback) => {

  }

  getRelated: async (callback) => {

  }


}