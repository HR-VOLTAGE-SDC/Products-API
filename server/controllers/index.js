const models = require('../models');

module.exports = {
  getProducts: async (req, res) => {
    try {
      const page = req.query.page || 1;
      const count = req.query.page || 5;

      let data = await models.getProducts(page, count);
      await res.json(data.rows);
    } catch (e) {
      res.sendStatus(500).send(`ERROR: ${e}`)
    }
  },

  getProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      let data = await models.getProduct(productId) // product id #

      await res.json(data.rows[0].product)
    } catch (e) {
      res.send(`ERROR: ${e}`)
    }
  },

  getStyles: async (req, res) => {
    try {
      const productId = req.params.id;
      let data = await models.getStyles(productId)
      await res.json(data.rows[0].product.styles)
    } catch (e) {
      res.sendStatus(500).send(`ERROR: ${e}`)
    }
  },

  getRelated: async (req, res) => {
    try {
      const productId = req.params.id;
      let data = await models.getRelated(productId)
      await res.json(data.rows[0].related)
    } catch (e) {
      res.sendStatus(500).send(`ERROR: ${e}`)
    }
  }
}