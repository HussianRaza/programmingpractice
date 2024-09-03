const pool = require("./database");

const create = async (description) => {
  const res = await pool.query(
    "INSERT INTO todo (description) VALUES ($1) RETURNING *",
    [description]
  );
  return res;
};

const get = async () => {
  const res = await pool.query("SELECT * FROM todo");
  return res;
};

const remove = async (id) => {
  const res = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
  return res;
};

module.exports = { create, get, remove };
