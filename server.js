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

//Index
app.get("/recipes", async (req, res) => {
    try {
        res.json(await Recipe.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});


// Create
app.post("/recipes", async (req, res) => {
    try {
        console.log(req.body)
        res.json(await Recipe.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});


// Update
app.put("/recipes/:id", async (req, res) => {
    try {
        console.log(req.body)
        res.json(
            await Recipe.findByIdAndUpdate(req.params.id, req.body)
        );
    } catch (error) {
        res.status(400).json(error);
    }
});

app.get("/recipes/:id", async (req, res) => {
    try {
        res.json(
            await Recipe.findById(req.params.id)
        );
    } catch (error) {
        res.status(400).json(error);
    }
});

// Delete
app.delete("/recipes/:id", async (req, res) => {
    try {
        res.json(await Recipe.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});


// Search
// app.get("/search", async (req, res) => {
//     console.log(req.query)
//     let query = req.query.q;
//     const recipe = await Recipe.find({ label: query });
//     return res.send(recipe)
// });

// app.get('/recipes/search', (req, res) => {
//     Recipe.getAll(req.query).then(products => {
//         res.status(200).json(products)
//     }).catch(() => res.status(500).end())
// })





app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));