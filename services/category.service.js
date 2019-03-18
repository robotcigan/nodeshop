const mongoose = require('mongoose');
const Category = require('../models/category.model.js');

// find all card
module.exports.findCategories = () => {
  return Category.find();
}

// find one card
// module.exports.findCardById = (id) => {
//   return Card.findById(id);
// }
module.exports.findCategoryByUrl = (url) => {
  return Category.find({url: url})
}