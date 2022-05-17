const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RecipeSchema = new Schema({
    // "from": { type: Number, default: 0 },
    // "to": { type: Number, default: 0 },
    // "count": { type: Number, default: 0 },
    // "_links": {
    //     "self": {
    //         "href": { type: String },
    //         "title": { type: String }
    //     },
    //     "next": {
    //         "href": { type: String },
    //         "title": { type: String }
    //     }
    // },
    // "hits": [
    // {
    "recipe": {
        "uri": { type: String },
        "label": { type: String, required: [true, "Every recipe must have a title"] },
        "image": { type: String, required: [true, "Every recipe must have an image"] },
        // "images": {
        //     "THUMBNAIL": {
        //         "url": { type: String },
        //         "width": { type: Number, default: 0 },
        //         "height": { type: Number, default: 0 }
        //     },
        //     "SMALL": {
        //         "url": { type: String },
        //         "width": { type: Number, default: 0 },
        //         "height": { type: Number, default: 0 }
        //     },
        //     "REGULAR": {
        //         "url": { type: String },
        //         "width": { type: Number, default: 0 },
        //         "height": { type: Number, default: 0 }
        //     },
        //     "LARGE": {
        //         "url": { type: String },
        //         "width": { type: Number, default: 0 },
        //         "height": { type: Number, default: 0 }
        //     }
        // },
        // "source": { type: String },
        "url": { type: String },
        // "shareAs": { type: String },
        // "yield": { type: Number, default: 0 },
        "dietLabels": [
            { type: String }
        ],
        "healthLabels": [
            { type: String, required: [true, "Every recipe must have a health label"] }
        ],
        "cautions": [
            { type: String, required: [true, "Every recipe must have cautions"] }
        ],
        "ingredientLines": [
            { type: String, required: [true, "Every recipe must have ingredients"] }
        ],
        "ingredients": [
            {
                "text": { type: String },
                "quantity": { type: Number, default: 0 },
                "measure": { type: String },
                "food": { type: String },
                "weight": { type: Number, default: 0 },
                "foodId": { type: String }
            }
        ],
        "calories": { type: Number, default: 0, required: [true, "Every recipe must have calories"] },
        "glycemicIndex": { type: Number, default: 0 },
        // "totalCO2Emissions": { type: Number, default: 0 },
        // "co2EmissionsClass": { type: String },
        "totalWeight": { type: Number, default: 0 },
        "cuisineType": [
            { type: String }
        ],
        "mealType": [
            { type: String }
        ],
        "dishType": [
            { type: String }
        ],
        "totalNutrients": { type: Object },
        // "totalDaily": { type: Object },
        // "digest": [
        //     {
        //         "label": { type: String },
        //         "tag": { type: String },
        //         "schemaOrgTag": { type: String },
        //         "total": { type: Number, default: 0 },
        //         "hasRDI": { type: Boolean, default: true },
        //         "daily": { type: Number, default: 0 },
        //         "unit": { type: String },
        //         "sub": { type: Object }
        //     }
        // ]
    },
    // "_links": {
    //     "self": {
    //         "href": { type: String },
    //         "title": { type: String }
    //     },
    //     "next": {
    //         "href": { type: String },
    //         "title": { type: String }
    //     }
    // }
}
    // ]
    // }
)

module.exports = Recipe = mongoose.model("recipes", RecipeSchema)