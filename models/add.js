const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addSchema = new Schema({
  user_id: String,

  ch: {
    type: String
  }
});
module.exports = mongoose.model("add", addSchema);
