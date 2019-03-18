const router = require('express').Router();
const cartRoute = require('./cart.route.js');
const cardService = require('../services/card.service');
const categoryService = require('../services/category.service');

router.get('', (req, res, next) => {
  // res.send('main page');
  res.render('index')
});

// show all cards
router.get('/catalog', (req, res, next) => {
  let getCards = cardService.findCards()
    .then(cards => {
      return cards
    })
    .catch(err => next(err));
  let getCategories = categoryService.findCategories()
    .then(categories => {
      return categories
    })
    .catch(err => next(err));
  let cartCookies = res.cookie('cart cookies', 'express');
  Promise.all([
    getCards,
    getCategories,
    cartCookies
  ])
    .then(results => {
      res.render('catalog', {cards: results[0], categories: results[1], cartCookies});
    })
});

router.get('/catalog/:name', (req, res, next) => {
  let getCardsByCategory = cardService.findCardsByCategory(req.params.name)
    .then(cards => {
      return cards
    })
    .catch(err => next(err));
  let getCategories = categoryService.findCategories()
    .then(categories => {
      return categories
    })
    .catch(err => next(err));
  Promise.all([
    getCardsByCategory,
    getCategories
  ])
    .then(results => {
      res.render('catalog', {
        cards: results[0],
        categories: results[1],
        activeCategory: req.params.name
      })
    })
});

router.get('/search?q=:name', (req, res, next) => {
  let getCardsBySearch = cardService.findCardsBySearch(req.params.name)
    .then(cards => {
      return cards
    })
    .catch(err => next(err));
  Promise.all([
    getCardsBySearch,
  ])
    .then(results => {
      res.render('search', {
        cards: results[0]
      })
    })
});

// show one card by id
router.get('/catalog/:category/:id', (req, res, next) => {
  cardService.findCardById(req.params.id)
    .then(card => {
      res.render('card', {card: card});
    })
    .catch(err => next(err));
});

// cart route
cartRoute;

module.exports = router;