const express = require("express");
const {
  todosGet,
  todoGet,
  todoPost,
  todoPatch,
  todoDelete,
} = require("../controllers/todoControllers");

const route = express.Router();

// GET ALL todos

route.get("/", todosGet);

// GET ONE todo
route.get("/:id", todoGet);

// POST a todo
route.post("/", todoPost);
// PATCH
route.patch("/:id", todoPatch);
// DELETE
route.delete("/:id", todoDelete);

module.exports = route;
