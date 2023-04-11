const mongoose = require("mongoose");

const productschema = mongoose.Schema(
  {
    image: String,
    title: String,
    category: String,
    status: String,
    strike: String,
    off: String,
    price: String,
  },
  {
    versionKey: false,
  }
);
let produtModel = new mongoose.model("offer", productschema);
module.exports = { produtModel };
