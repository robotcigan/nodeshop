const mongoose = require('mongoose');
const Card = require('../models/card.model.js');

// find all cards
module.exports.findCards = () => {
  return Card.find();
}

// find all cards by category
module.exports.findCardsByCategory = (category) => {
  return Card.find({category: category})
}

// find one card
module.exports.findCardById = (id) => {
  return Card.findById(id);
}

module.exports.findCardsBySearch = (name) => {
  return Card.find({name: name})
}