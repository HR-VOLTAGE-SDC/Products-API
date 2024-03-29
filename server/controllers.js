const models = require('./models');

module.exports = {
  getProducts: async (req, res) => {
    try {
      let data = await models.getProducts(req.query.page, req.query.count);
      await res.send(data.rows);
    } catch (e) {
      res.send(`ERROR: ${e}`)
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
      await res.send(data.rows[0].product.styles)
    } catch (e) {
      res.send(`ERROR: ${e}`)
    }
  },

  getRelated: async (req, res) => {
    try {
      const productId = req.params.id;
      let data = await models.getRelated(productId)
      await res.send(data.rows[0].related)
    } catch (e) {
      res.send(`ERROR: ${e}`)
    }
  },

  getLoader: (req, res) => {
    try {
     res.send("loaderio-66f28c68e03209605324a77fe6714e8b");
    } catch (e) {
      res.send(`ERROR: ${e}`)
    }
  }
}