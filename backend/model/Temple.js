const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema({
 name:String,
 location:String,
 description:String
});

module.exports = mongoose.model("Temple",templeSchema);
