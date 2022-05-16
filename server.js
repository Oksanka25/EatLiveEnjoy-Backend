require("dotenv").config();
const { PORT = 4000 } = process.env
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const Recipe = require("./models/Recipe");
require('./config/db.connection');


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});


app.get("/recipes", async (req, res) => {
    const recipes = await Recipe.find({});
    return res.send(recipes)
});





app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));