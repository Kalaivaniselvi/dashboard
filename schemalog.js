const mongoose = require("mongoose");

const data_schema_login = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});
module.exports = mongoose.model("kalaivani_password", data_schema_login);
