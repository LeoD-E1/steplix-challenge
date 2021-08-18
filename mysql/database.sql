CREATE DATABASE IF NOT EXISTS steplix;

USE steplix;

CREATE TABLE IF NOT EXISTS currencies(
  id_currency INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR (50) NOT NULL CHECK(name <> ''),
  description VARCHAR (255),
  symbol VARCHAR (5) NOT NULL CHECK(symbol <> ''),
  PRIMARY KEY (id_currency)
);

CREATE TABLE IF NOT EXISTS rates(
  id_rate INTEGER NOT NULL AUTO_INCREMENT,
  id_currency INTEGER NOT NULL,
  value FLOAT NOT NULL CHECK(value > 0),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (id_rate),
  FOREIGN KEY (id_currency) 
    REFERENCES currencies(id_currency)
    ON DELETE CASCADE
);

INSERT INTO currencies (name, symbol)
VALUES ('Bitcoin', 'BTC' ), ('Etherium', 'ETH'), ('Cardano', 'ADA');