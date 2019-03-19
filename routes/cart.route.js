const router = require('express').Router();

router.post('/addToCart', (req, res, next) => {
  // res.cookie('cart cookies', req.body);
  // res.send('some');
  // res.sendStatus(200);
  if(req.session.pageViews){
      req.session.pageViews++;
      // res.send("You visited this page " + req.session.pageViews + " times");
      console.log(req.session.pageViews)
   } else {
      req.session.pageViews = 1;
      // res.send("Welcome to this page for the first time!");
   }
});

module.exports = router;