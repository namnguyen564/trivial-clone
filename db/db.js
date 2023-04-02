const { Pool } = require("pg");

const sessionPool = new Pool({
  user: "postgres",
  host: "containers-us-west-162.railway.app",
  database: "railway",
  password: "ZemQ2A0NIorXg5EihiSq",
  port: 6917,
});

module.exports = sessionPool;
