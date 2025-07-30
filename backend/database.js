const { default: mongoose } = require("mongoose");
require('dotenv').config()

const dbURI = process.env.DB_URI

const connectToDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToDB;
