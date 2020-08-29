const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: true },
  profession: { type: String, required: true },
});

module.exports = new mongoose.model("User", UserSchema)