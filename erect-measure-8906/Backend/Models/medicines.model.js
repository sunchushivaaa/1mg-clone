const mongoose = require("mongoose");

const medicineschema = mongoose.Schema(
  {
    img: String,
    name: String,
    description: String,
  },
  {
    versionKey: false,
  }
);
let medicineModel = new mongoose.model("medicine", medicineschema);
module.exports = { medicineModel };
