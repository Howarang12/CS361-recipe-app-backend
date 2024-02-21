const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    ingredients: [{
        name: String,
        quantity: Number,
        unit: String
    }],
    instructions: [{
        step: Number,
        description: String
    }],
    prepTime: Number,
    cookTime: Number,
    totalTime: Number,
    cuisine: String,
    servingSize: Number,
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe