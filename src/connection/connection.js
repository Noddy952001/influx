
const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
      "mongodb+srv://vikas:vikas_123@cluster0.aflw8.mongodb.net/influx?retryWrites=true&w=majority"
      
      );
};
