const mongoose = require("mongoose");

const balloonSchema = new mongoose.Schema({
    brand: String,
    size: Number,
    color: String, // We could look to either add a RGB or Hex value here or in addition for previewing colors.
    qty: Number,
});