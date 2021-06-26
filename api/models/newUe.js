const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewUESchema = new Schema({
  time: Number,
  ueData: {
    dlRate: Number,
    ulRate: Number
  }
  
});

module.exports = mongoose.model("newUe", NewUESchema);
