const Todo = require("../models/todo");
const mongoose = require("mongoose");

// GET ALL todos
const todosGet = (req, res) => {
  Todo.find()
    .sort({ updatedAt: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
};

// GET ONE todo
const todoGet = (req, res) => {
  if (mongoose.isValidObjectId(req.params.id)) {
    Todo.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  }
};

// POST a todo
const todoPost = (req, res) => {
  Todo.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
};

// PATCH

const todoPatch = (req, res) => {
  if (mongoose.isValidObjectId(req.params.id)) {
    Todo.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  }
};

// DELETE
const todoDelete = (req, res) => {
  if (mongoose.isValidObjectId(req.params.id)) {
    Todo.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  }
};

module.exports = { todosGet, todoGet, todoPost, todoPatch, todoDelete };
