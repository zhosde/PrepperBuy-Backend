const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    totalPrice: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", orderSchema);
