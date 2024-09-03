const express = require("express");

const { get, create, removeTodo } = require("../controller/index");

const router = express.Router();

router.get("/todos", get);

router.post("/todo/create", create);

router.delete("/todo/:id", removeTodo);

module.exports = router;
