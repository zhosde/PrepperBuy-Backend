const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema(
  {
    items: [
      {
        productID: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        qty: { type: Number, default: 1 },
        purchasePrice: {type: Number},
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    // status: {type: String, enum: ["pending", "confirmed"], default: "pending"}
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", orderSchema);
