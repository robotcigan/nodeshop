const router = require('express').Router();

router.post('/addToCart', (req, res, next) => {
  res.send('some');
});

module.exports = router;