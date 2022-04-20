DROP TABLE IF EXISTS products;

CREATE TABLE products (
 product_id SERIAL NOT NULL,
 name VARCHAR(128) NOT NULL,
 slogan VARCHAR(1024) NOT NULL,
 description VARCHAR(1024) NOT NULL,
 category VARCHAR(128) NOT NULL,
 default_price INTEGER NOT NULL,
 PRIMARY KEY (product_id)
);


DROP TABLE IF EXISTS features;

CREATE TABLE features (
 feature_id SERIAL NOT NULL,
 product_id INTEGER NOT NULL,
 feature VARCHAR(128) NOT NULL,
 value VARCHAR(128) NOT NULL,
 PRIMARY KEY (feature_id)
);


DROP TABLE IF EXISTS styles;

CREATE TABLE styles (
 style_id SERIAL NOT NULL,
 product_id INTEGER NOT NULL,
 name VARCHAR(128) NOT NULL,
 original_price INTEGER NOT NULL,
 sale_price INTEGER,
 default? BOOLEAN NOT NULL DEFAULT FALSE,
 PRIMARY KEY (style_id)
);


DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
 photo_id SERIAL NOT NULL,
 style_id INTEGER NOT NULL,
 thumbnail_url VARCHAR(1024) NOT NULL,
 url VARCHAR(1024) NOT NULL,
 PRIMARY KEY (photo_id)
);


DROP TABLE IF EXISTS skus;

CREATE TABLE skus (
 sku_id SERIAL NOT NULL,
 style_id INTEGER NOT NULL,
 quantity INTEGER NOT NULL,
 size VARCHAR(10) NOT NULL,
 PRIMARY KEY (sku_id)
);


DROP TABLE IF EXISTS related_products;

CREATE TABLE related_products (
 related_product_id SERIAL NOT NULL,
 product_id INTEGER NOT NULL,
 PRIMARY KEY (related_product_id)
);


ALTER TABLE styles ADD FOREIGN KEY (product_id) REFERENCES products (product_id);
ALTER TABLE features ADD FOREIGN KEY (product_id) REFERENCES products (product_id);
ALTER TABLE related_products ADD FOREIGN KEY (product_id) REFERENCES products (product_id);
ALTER TABLE photos ADD FOREIGN KEY (style_id) REFERENCES styles (style_id);
ALTER TABLE skus ADD FOREIGN KEY (style_id) REFERENCES styles (style_id);