const express = require("express");
const db = require('./db/index');
const app = express();

const morgan = require('morgan');
const pool = require("./db/index");

const router = require('./routes');

app.use(express.json());
app.use('', router)

// ROUTES

// get all products

// app.get ('/products', async(req, res) => {
//   try {
//     const allProducts = await pool.query("SELECT * FROM products");
//     res.json(allProducts.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// })

// // get a product
// app.get('/products/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const product = await pool.query("SELECT * from PRODUCTS WHERE id = $1", [
//       id
//     ]);
//     res.json(product.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// })

// // get product styles

// app.get('products/:id/styles', (req, res) => {
//   const productId = req.paras.product_id
// })

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})