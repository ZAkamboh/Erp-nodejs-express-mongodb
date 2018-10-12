const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dihadiSchema = new Schema({
  dihadi: {
    type: String
  }
});
module.exports = mongoose.model("dihadi", dihadiSchema);
