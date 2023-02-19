const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected", conn.connection.host);
  } catch (error) {
    console.log("error:", error.message);
    process.exit();
  }
};

module.exports = ConnectDB;
