\c products_api;

\COPY products FROM '/Users/amy/SDC/products.csv' DELIMITER ',' CSV HEADER;

\COPY features FROM '/Users/amy/SDC/features.csv' DELIMITER ',' CSV HEADER;

\COPY styles FROM '/Users/amy/SDC/styles.csv' DELIMITER ',' CSV HEADER;

\COPY photos FROM '/Users/amy/SDC/photos.csv' DELIMITER ',' CSV HEADER;

\COPY skus FROM '/Users/amy/SDC/skus.csv' DELIMITER ',' CSV HEADER;

\COPY related_products FROM '/Users/amy/SDC/related.csv' DELIMITER ',' CSV HEADER;