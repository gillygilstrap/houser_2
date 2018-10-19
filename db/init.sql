DROP TABLE IF EXISTS houses;
CREATE TABLE IF NOT EXISTS houses (
    product_id SERIAL PRIMARY KEY,
    name text,
    address text,
    city text,
    state text,
    zipcode int
);