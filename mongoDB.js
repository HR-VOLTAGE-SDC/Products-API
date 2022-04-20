const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  product_id: Number NOT NULL,
  name: String,
  description: String,
  category: String,
  default_price: Number,
  features: [{
    feature: String,
    value: String
  },
  ],
  styles: [{
    style_id: Number NOT NULL,
    name: String,
    original_price: Number,
    sale_price: Number,
    default?: Boolean,
    photos: [{
      thumbnail_url: String,
      url: String
    },
    ],
    skus: {
      sku_id: {
        quantity: Number,
        size: String,
      }.
    }.
  },
  ],
  related_products: [Number]
});