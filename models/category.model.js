const mongoose = require('mongoose');

const categoryScheme = mongoose.Schema({
  name: String,
  category: String
})

let Category = mongoose.model('Category', categoryScheme);

module.exports = Category;