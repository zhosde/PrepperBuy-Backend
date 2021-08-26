const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  category: String,
  image: String,
  price: Number,
  stocked: {type: Boolean, default: true}
});

module.exports = model("Product", productSchema);
