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
  deviceList: {
    type: Array,
    required: true
  },
  connected: {
    type: Boolean,
    required: true
  },
  socketId: {
    type: String,
    required: true
  },
  bigTimeLayout: {
    type: Boolean,
    required: true
  },
  deviceId: {
    type: String,
    required: true,
  },
  deviceName: {
    type: String,
    required: true,
  }


});

module.exports = model("Setings", settings);
