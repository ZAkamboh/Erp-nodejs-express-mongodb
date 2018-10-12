const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addroomSchema = new Schema({
  user_id: String,

  chc: {
    type: String
  }
});
module.exports = mongoose.model("addroom", addroomSchema);
