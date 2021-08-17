const express = require("express");
const mongoose = require("mongoose");

const Car = require("./Car");

require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/car", async (req, res) => res.send(await Car.find()));

app.get("/car/:id/", async (req, res) => {
  res.send(await Car.findById(req.params.id));
  console.log(req.params);
});

app.get("/name", (req, res) => {
  res.send("Hello " + req.query.name + " " + req.query.city);
  console.log(req.query);
});

app.post("/car", async (req, res) => {
  const { body } = req;
  const newCar = new Car(body);
  const result = await newCar.save();
  res.send(result);
});

app.delete("/car/:id", async (req, res) => {
  res.send(await Car.findByIdAndDelete(req.params.id));
});

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(3000, () => console.log("server running"));
