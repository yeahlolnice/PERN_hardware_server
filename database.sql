CREATE DATABASE hardwarestore;

CREATE TABLE hardware(
    hardware_id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    description VARCHAR(255)
);