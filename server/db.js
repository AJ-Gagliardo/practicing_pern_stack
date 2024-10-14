const Pool = require("pg").Pool;
require("dotenv").config();

const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.PORT;
const db = process.env.DATABASE;

const pool = new Pool({
  user: "postgres",
  password: password,
  host: host,
  port: port,
  database: db,
});

module.exports = pool;
