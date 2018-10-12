const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bankSchema = new Schema({
  name: {
    type: String
  },
  date1: {
    type: String
  },

  date2: {
    type: String
  },

  date3: {
    type: String
  },

  date4: {
    type: String
  },

  date5: {
    type: String
  },
  date6: {
    type: String
  },
  date7: {
    type: String
  },

  a: {
    type: String
  },
  b: {
    type: String
  },
  c: {
    type: String
  },

  d: {
    type: String
  },
  e: {
    type: String
  },
  f: {
    type: String
  },
  g: {
    type: String
  },

  h: {
    type: String
  },
  i: {
    type: String
  },

  j: {
    type: String
  },

  k: {
    type: String
  },
  l: {
    type: String
  },
  m: {
    type: String
  },
  n: {
    type: String
  },
  o: {
    type: String
  },

  p: {
    type: String
  },
  q: {
    type: String
  },
  r: {
    type: String
  },

  s: {
    type: String
  },
  t: {
    type: String
  },
  u: {
    type: String
  },
  v: {
    type: String
  },
  w: {
    type: String
  },
  x: {
    type: String
  },
  y: {
    type: String
  },

  z: {
    type: String
  },
  aa: {
    type: String
  },
  bb: {
    type: String
  }
});
module.exports = mongoose.model("bank", bankSchema);
