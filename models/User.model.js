const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
