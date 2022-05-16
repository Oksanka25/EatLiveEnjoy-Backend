require("dotenv").config();
// const { MONGODB_URI } = process.env;
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));


