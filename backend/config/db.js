const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/dashboard");
    console.log("Connected to MongoDB Server Successfully");
  } catch (err) {
    console.log("Error Connecting to Mongodb Server");
  }
};

module.exports = connectDB;
