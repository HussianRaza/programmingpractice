const formidable = require("formidable");
const { create, get, remove } = require("../model/todo");

exports.create = (req, res) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields) => {
    const { description } = fields;
    // check to see if the description field exists in the form
    // if description doesn't exist, send error
    if (!description) {
      return res.status(400).json({
        error: "Description is required",
      });
    }
    // if description exists, add to database using create() function
    try {
      const newTask = await create(description);
      return res.status(201).send({ data: newTask.rows[0] });
    } catch (error) {
      // if description cannot be added to database, send error
      return res.status(400).json({
        error,
      });
    }
  });
};

exports.get = async (req, res) => {
  try {
    const todos = await get();
    return res.status(200).json({ data: todos.rows });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

exports.removeTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await remove(id);

    return res.status(200).send({ data: id });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
