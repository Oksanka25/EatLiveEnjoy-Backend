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



// const url = [`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=71800000&app_key=${process.env.API_KEY}`];

url.map(async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        resultData = json.hits;

        // console.log(json)

        Recipe.insertMany(resultData);

        // for (let i = 0; i < resultData.length; i++) {
        //     let recipe = new Recipe({
        //         label: resultData[i].hits[0].label,
        //         image: resultData[i].hits[0].recipe.image,
        //         dietLabels: resultData[i].hits[0].dietLabels,
        //         healthLabels: resultData[i].hits[0].healthLabels,
        //         cautuions: resultData[i].hits[0].cautions,
        //         ingredientLines: resultData[i].hits[0].ingredientLines,
        //         calories: resultData[i].hits[0].calories,
        //         cuisineType: resultData[i].hits[0].cuisineType,
        //     })

        //     recipe.save(() => {
        //         console.log("saved" + recipe)

        //         saveCounter++;

        //         if (saveCounter === resultData.length) {
        //             mongoose.disconnect()
        //                 .then(() => console.log("saved succesfully and mongodb   disconnected"))
        //                 .catch(error => console.log(error));
        //         }
        //     });
        // }
    } catch (error) {
        console.log(error);
    }
})