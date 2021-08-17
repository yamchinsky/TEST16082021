const mongoose = require("mongoose");

const carsSchema = mongoose.Schema({
  name: String,
  color: String,
  model: String,
  year: Number,
});

const Car = mongoose.model("car", carsSchema);

module.exports = Car;
