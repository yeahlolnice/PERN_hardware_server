CREATE DATABASE hardwarestore;

CREATE TABLE hardware(
    hardware_id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    description VARCHAR(255)
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    password VARCHAR(85)
);

-- add users
INSERT INTO users (username, password) VALUES(yeahlolnice, password123);