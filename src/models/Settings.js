const { Schema, model } = require("mongoose");

const settings = new Schema({
  scale: {
    type: Number,
    required: true,
  },
  currentDevice: {
    type: String,
    required: true,
  },
});

module.exports = model("Setings", settings);
