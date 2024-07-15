const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose.connect(
    "mongodb://localhost:27017/",
    console.log("Database connected successfully")
  );
};

module.exports = connectToDB