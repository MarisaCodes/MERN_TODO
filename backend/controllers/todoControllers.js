const mongoose = require("mongoose");
const Todo = require("../models/todo");
// GET all todos

const todosGet = (req, res) => {
  Todo.find()
    .sort({ updatedAt: -1 })
    .then((data) => {
      if (data) res.json(data);
      else throw Error("there are no todos");
    })
    .catch((err) => res.json({ error: err.message }));
};

// GET single todo

const todoGet = (req, res) => {
  if (mongoose.isValidObjectId(req.params.id)) {
    Todo.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json({ error: err.message }));
  } else {
    res.json({ error: "this todo does not exist" });
  }
};

// POST a todo

const todoPost = (req, res) => {
  Todo.create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json({ error: err.message }));
};

// PATCH a todo

const todoPatch = (req, res) => {
  if (mongoose.isValidObjectId(req.params.id)) {
    Todo.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.json(data))
      .catch((err) => res.json({ error: err.message }));
  } else {
    res.json({ error: "this todo does not exist" });
  }
};

// DELETE a todo

const todoDelete = (req, res) => {
  if (mongoose.isValidObjectId(req.params.id)) {
    Todo.findByIdAndDelete(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json({ error: err.message }));
  } else {
    res.json({ error: "this todo does not exist" });
  }
};

module.exports = { todosGet, todoGet, todoPost, todoPatch, todoDelete };
