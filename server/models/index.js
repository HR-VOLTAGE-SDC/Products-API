const pool = require('../db');

module.exports = {

  getProducts: (page, count) => {
    const start = page * count - count + 1;
    const end = page * count;
    const queryString = `SELECT * FROM products WHERE id BETWEEN ${start} and ${end}`;
    return pool.query(queryString);
  },

  getProduct: async (productId) => {
    const queryString = `
    SELECT JSON_BUILD_OBJECT(
        'id', id,
        'name', name,
        'slogan', slogan,
        'description', description,
        'category', category,
        'default_price', default_price,
        'features', (
          SELECT COALESCE(JSON_AGG(features), '[]'::json)
          FROM (
            SELECT feature, value
            FROM features
            WHERE product_id = p.id
          ) AS features
        )
      ) AS product
    FROM products p WHERE id=${productId}`;
    return pool.query(queryString);
  },

  getStyles: async (productId) => {
    const queryString = `
    SELECT JSON_BUILD_OBJECT(
      'product_id', id,
      'styles', (
        SELECT COALESCE(JSON_AGG(styles), '[]'::json)
        FROM (
          SELECT
          id AS style_id,
          name,
          original_price,
          sale_price,
          default_style,
          (
            SELECT COALESCE(JSON_AGG(photos), '[]'::json) AS photos
            FROM (
              SELECT
              thumbnail_url,
              url
              FROM photos
              WHERE style_id = styles.id
            ) AS photos
          ),
          (
            SELECT COALESCE(JSON_AGG(skus), '[]'::json) AS skus
            FROM (
              SELECT
              size,
              quantity
              FROM skus
              WHERE style_id = styles.id
            ) AS skus
          )
          FROM styles
          WHERE product_id = p.id
        ) AS styles
      )
    ) AS product
    FROM products p WHERE id=${productId}`;

    let styles = await pool.query(queryString);
    return styles;
  },

  getRelated: async (productId) => {
    const queryString = `
    SELECT ARRAY_AGG(related_product_id) AS related
    FROM related_products
    WHERE related_products.current_product_id = ${productId}`;

    let related_products = await pool.query(queryString);
    return related_products;
  }
}