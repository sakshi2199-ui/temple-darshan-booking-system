const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
 temple:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Temple"
 },
 date:String,
 time:String,
 capacity:Number
});

module.exports = mongoose.model("Slot",slotSchema);
