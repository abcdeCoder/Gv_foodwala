const mongoose = require("mongoose");
const config = require("config");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err.message));
};

module.exports = connectDB;