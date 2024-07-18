const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose.connect(
    process.env.CONNECTION_URL,
    console.log("Database connected successfully")
  );
};

module.exports = connectToDB