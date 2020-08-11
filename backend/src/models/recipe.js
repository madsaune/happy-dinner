const mongoose = require('mongoose');

const {
  Schema,
} = mongoose.Schema;

const recipe = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: Array,
  imageUrl: {
    type: String,
    required: true,
  },
  sourceUrl: String,
  duration: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  steps: {
    type: Array,
    required: true,
  },
});

const Recipe = mongoose.model('Recipe', recipe);

module.exports = Recipe;
