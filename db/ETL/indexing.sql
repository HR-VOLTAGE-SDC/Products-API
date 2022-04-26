\c productss_api;

\CREATE INDEX product_features ON features (product_id);

\CREATE INDEX product_styles ON styles (product_id);

\CREATE INDEX style_photos ON photos (style_id);

\CREATE INDEX style_skus ON skus (style_id);

\CREATE INDEX product_related ON related_products (current_product_id);