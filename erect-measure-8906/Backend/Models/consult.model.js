const mongoose = require("mongoose");

const consultschema = mongoose.Schema(
  {
    name: String,
    age: Number,
    gender: String,
  },
  {
    versionKey: false,
  }
);
let consultModel = new mongoose.model("user", consultschema);
module.exports = { consultModel };
