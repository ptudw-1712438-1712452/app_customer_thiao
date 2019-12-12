var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);
var controller = require('../controllers/user');

router.get('/logout',isLoggedIn ,controller.logout);
router.use('/', notLoggedIn, controller.notLogin);
router.get('/signup', controller.signup);
router.post('/signup', controller.postSignup); 
router.get('/signin', controller.signin);
router.post('/signin', controller.postSignin);
  
module.exports = router;

function isLoggedIn(req, res, next){
      if(req.isAuthenticated()){
          return next();
      }
      res.redirect('/');
}
function notLoggedIn(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}