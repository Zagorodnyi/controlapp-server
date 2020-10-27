const { Schema, model } = require("mongoose");

const settings = new Schema({
  scale: {
    type: Number,
    required: true,
    min: 1,
    max: 4
  },
  currentDevice: {
    type: String,
    required: true,
  },
});

module.exports = model("Setings", settings);
