const { Schema, model } = require("mongoose");

const manifest = new Schema({
    name: {
        type: String,
        required: true,
    },
    version: {
        type: String,
        required: true,
    },
    packages: {
        type: Object,
        required: true
    },

});

module.exports = model("Manifest", manifest);
