const models = require('../models');

module.exports = {

  getAllProducts: async (req, res) => {
    try {
      let data = await models.getAllProducts(req.query)
      await res.status(200).json(data)
    } catch (e) {
      res.sendStatus(500).send(`ERROR: ${e}`)
    }
  }

  getProduct: async (req, res) => {
    try {
      let data = await models.getProduct(req.query)
      await res.status(200).json(data)
    } catch (e) {
      res.sendStatus(500).send(`ERROR: ${e}`)
    }
  }

  getStyles: async (req, res) => {
    try {
      let data = await models.getStyles(req.query)
      await res.status(200).json(data)
    } catch (e) {
      res.sendStatus(500).send(`ERROR: ${e}`)
    }
  }

  getRelated: async (req, res) => {
    try {
      let data = await models.getRelated(req.query)
      await res.status(200).json(data)
    } catch (e) {
      res.sendStatus(500).send(`ERROR: ${e}`)
    }
  }
}