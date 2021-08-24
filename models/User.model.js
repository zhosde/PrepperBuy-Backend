const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  isAdmin: { type: Boolean, required: true, default: false }
});

const User = model("User", userSchema);

module.exports = User;
