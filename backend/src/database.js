import { createPool } from "mysql2";
require("dotenv").config();

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const configProd = {
  host: process.env.DB_PROD_HOST,
  user: process.env.DB_PROD_USER,
  database: process.env.DB_PROD_NAME,
  password: process.env.DB_PROD_PASSWORD,
  port: process.env.DB_PROD_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = createPool(configProd);
const asyncPool = pool.promise();
export default asyncPool;
