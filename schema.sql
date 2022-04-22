DROP DATABASE IF EXISTS product_api;
DROP DATABASE IF EXISTS products_api;

CREATE DATABASE products_api;

\c products_api;

DROP TABLE IF EXISTS features CASCADE;
DROP TABLE IF EXISTS related_products CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS skus CASCADE;
DROP TABLE IF EXISTS styles CASCADE;
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
 id SERIAL PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 slogan VARCHAR(1000) NOT NULL,
 description VARCHAR(1000) NOT NULL,
 category VARCHAR(100) NOT NULL,
 default_price INTEGER NOT NULL
);


CREATE TABLE features (
 id SERIAL PRIMARY KEY,
 product_id INTEGER NOT NULL,
 feature VARCHAR(50) NOT NULL,
 value VARCHAR(50) NOT NULL
);


CREATE TABLE styles (
 id SERIAL PRIMARY KEY,
 product_id INTEGER NOT NULL,
 name VARCHAR(100) NOT NULL,
 sale_price VARCHAR(10) NULL,
 original_price INTEGER NOT NULL,
 default_style BOOLEAN NOT NULL
);


CREATE TABLE photos (
 id SERIAL PRIMARY KEY,
 style_id INTEGER NOT NULL,
 url VARCHAR(1000) NOT NULL,
 thumbnail_url TEXT NOT NULL
);


CREATE TABLE skus (
 id SERIAL PRIMARY KEY,
 style_id INTEGER NOT NULL,
 size VARCHAR(10) NOT NULL,
 quantity INTEGER NOT NULL
);



CREATE TABLE related_products (
 id SERIAL PRIMARY KEY,
 current_product_id INTEGER NOT NULL,
 related_product_id INTEGER NOT NULL
);


ALTER TABLE features ADD FOREIGN KEY (product_id) REFERENCES products (id);
ALTER TABLE styles ADD FOREIGN KEY (product_id) REFERENCES products (id);
ALTER TABLE photos ADD FOREIGN KEY (style_id) REFERENCES styles (id);
ALTER TABLE skus ADD FOREIGN KEY (style_id) REFERENCES styles (id);
ALTER TABLE related_products ADD FOREIGN KEY (current_product_id) REFERENCES products (id);