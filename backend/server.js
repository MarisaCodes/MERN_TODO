const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const router = require("./routes/todoRoutes");
const app = express();

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/TODO")
  .then(() => {
    app.listen(3050);
  })
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routing

app.use("/api/todos", router);
