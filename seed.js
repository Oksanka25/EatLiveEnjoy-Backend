const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");
const fetch = require("node-fetch");
require("dotenv").config();

let resultData;
// let saveCounter = 0;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("mongodb connection success"))
    .catch(error => console.log(error));

const ingredients = [
    "chicken",
    "salad",
    "pasta",
    "apple",
    "tomato"
];

const baseUrl = "https://api.edamam.com/api/recipes/v2";

const url = [];

ingredients.forEach(ingredient => {
    url.push(`${baseUrl}?type=public&q=${ingredient}&app_id=71800000&app_key=${process.env.API_KEY}`)
})

url.map(async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        resultData = json.hits;
        Recipe.insertMany(resultData);
    } catch (error) {
        console.log(error);
    }
})