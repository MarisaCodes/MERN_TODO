const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const route = require("./routes/todoRoutes");
const app = express();

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/TODO")
  .then(() => {
    app.listen(3050);
  })
  .catch((err) => console.log(err.message));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todos", route);
