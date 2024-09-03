import express from "express";
const app = express();
const port = 3000;
import pool from "./db/db.js";

app.use(express.json());

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await pool.query("select * from todos");
    res.send(todos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get tody by id
app.get("/todo/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await pool.query("select * from todos where id=$1", [id]);
    res.send(todo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//create a todo

app.post("/todo", async (req, res) => {
  const description = req.body.description;

  try {
    const todo = await pool.query(
      "insert into todos (description) values($1)",
      [description]
    );
    res.send(todo);
  } catch (error) {
    console.error(error.message);
  }
});

//update a todo

app.put("/todo/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  try {
    const todo = await pool.query(
      "update todos set description = $1 where id = $2;",
      [description, id]
    );
    res.send(todo);
  } catch (error) {
    console.error(error.message);
  }
});

//delete a todo
app.delete("/todo/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await pool.query("delete from todos where id = $1", [id]);
    res.send(todo);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
