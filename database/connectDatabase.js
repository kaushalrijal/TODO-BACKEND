const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kaushalrijal091:BlRnhcRmxjPs3pHE@cluster0.n2scte2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    console.log("Database connected successfully")
  );
};

module.exports = connectToDB