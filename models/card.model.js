const mongoose = require('mongoose');

const cardScheme = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  img: String,
  url: String
})

let Card = mongoose.model('Card', cardScheme);

module.exports = Card;