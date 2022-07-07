const mongoose = require("mongoose");


const userCartSchema = new mongoose.Schema(
    {
      code : {type :  Number ,require: true},
      qty : {type : Number ,require: true},
      unitPrice : {type : Number ,require: true},
      totalAmt : {type : Number ,require: true},


    },
    {
      versionKey: false, 
      timestamps: true, 
    }
  );
  
  const Usercart  = mongoose.model("usercart", userCartSchema); 

  module.exports = Usercart