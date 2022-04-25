const models = require('../models');

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      let data = await models.getAllProducts(req.query)
      await res.status(200).json(data)
    } catch (e) {
      res.sendStatus(500).send(`ERROR: ${e}`)
    }
  },

  getProduct: async (req, res) => {
    try {
      const productId = req.params.id;
      let data = await models.getProduct(productId) // product id #

      await res.json(data)
    } catch (e) {
      res.json(`ERROR: ${e}`)
    }
  },

  getStyles: async (req, res) => {
    try {
      const productId = req.params.id;
      let data = await models.getStyles(productId)
      await res.json(data)
    } catch (e) {
      res.send(`ERROR: ${e}`)
    }
  },

  getRelated: async (req, res) => {
    try {
      const productId = req.params.id;
      let data = await models.getRelated(productId)
      await res.json(data)
    } catch (e) {
      res.send(`ERROR: ${e}`)
    }
  }
}