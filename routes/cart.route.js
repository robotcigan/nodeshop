const router = require('express').Router();
const cardService = require('../services/card.service');

router.post('/cartCount/', (req, res, next) => {
  if (!req.session.cartCount) {
    req.session.cartCount = 0;
    req.session.cartItems = [];
  }
  // console.log('cart count', req.session.cartCount);
  res.send({'cartCount': req.session.cartCount, 'cartList': req.session.cartItems});
  next();
});

router.post('/addToCart/:id', (req, res, next) => {
  req.session.cartCount++;
  req.session.cartItems.push(req.params.id);
  res.send({'cartCount': req.session.cartCount});
  next();
});

router.get('/cart', (req, res, next) => {
  cardService.findCardsByIds(req.session.cartItems)
    .then(cards => {
      // return cards
      console.log(cards)
      res.render('cart', {'cartItems': cards});
    })
    .catch(err => next(err));
  // next();
});

module.exports = router;