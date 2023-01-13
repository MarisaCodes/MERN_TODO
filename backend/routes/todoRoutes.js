const express = require("express");
const {
  todosGet,
  todoGet,
  todoPost,
  todoPatch,
  todoDelete,
} = require("../controllers/todoControllers");
const router = express.Router();

// GET all todos

router.get("/", todosGet);

// GET single todo

router.get("/:id", todoGet);

// POST a todo

router.post("/", todoPost);

// PATCH a todo

router.patch("/:id", todoPatch);

// DELETE a todo

router.delete("/:id", todoDelete);

module.exports = router;
