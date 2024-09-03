//Lue5GUIztlRZB5DH

import { Pool } from "pg";
const connectionString =
  "postgres://postgres.nivcbnskxchodjblecob:Lue5GUIztlRZB5DH@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres";

const pool = new Pool({
  connectionString,
});

export default pool;
