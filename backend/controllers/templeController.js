const Temple = require("../models/Temple");

exports.getTemples = async(req,res)=>{
 const temples = await Temple.find();
 res.json(temples);
};

exports.createTemple = async(req,res)=>{
 const temple = await Temple.create(req.body);
 res.json(temple);
};
