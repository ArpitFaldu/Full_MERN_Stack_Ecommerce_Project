// const { default: mongoose } = require("mongoose");

// const dbConnect = () => {
//   try {
//     const conn = mongoose.connect(process.env.MONGODB_URL);
//     console.log("Database Connected Successfully");
//   } catch (error) {
//     console.log("DAtabase error");
//   }
// };
// module.exports = dbConnect;

const mongoose = require('mongoose');
require('dotenv').config(); // Ensure you have this line to load your .env variables

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected Successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

module.exports = dbConnect;