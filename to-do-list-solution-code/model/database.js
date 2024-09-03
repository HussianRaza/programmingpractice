const { Pool } = require("pg");
const CONNECTION_STRING = `postgres://postgres.xkupqsbymsempmihcpwm:tzrGgMZxyyu4hxUt@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres
`;
const pool = new Pool({
  CONNECTION_STRING,
});

module.exports = pool;
