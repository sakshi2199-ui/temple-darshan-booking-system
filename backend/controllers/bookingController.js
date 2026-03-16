const Booking = require("../models/Booking");

exports.bookSlot = async(req,res)=>{

 const booking = await Booking.create({
  user:req.user.id,
  slot:req.body.slotId
 });

 res.json(booking);
};

exports.myBookings = async(req,res)=>{

 const bookings = await Booking.find({user:req.user.id})
 .populate("slot");

 res.json(bookings);
};
