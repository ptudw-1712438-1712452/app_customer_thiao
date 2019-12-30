var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);
var passport= require('passport');
var Order = require('../models/order');
var Cart = require('../models/cart');

module.exports.logout = function(req, res, next){
    req.logout();
    res.redirect('/');
}
module.exports.signup = function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length >0});
}
module.exports.signin = function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length >0});
}
module.exports.notLogin = function(req, res, next){
    next();
}
module.exports.postSignup = passport.authenticate('local.signup',{
    failureRedirect: '/user/signup',
    failureFlash: true
})
module.exports.postSignin = passport.authenticate('local.signin',{
    failureRedirect: '/user/signin',
    failureFlash: true
})
module.exports.postSigninUrl = function(req, res, next){
    if(req.session.oldUrl){
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else {
        res.redirect('/');
    }
}
module.exports.postSignupUrl = function(req, res, next){
    if(req.session.oldUrl){
        var oldUrl = req.session.oldUrl;
        req.session.oldUrl = null;
        res.redirect(oldUrl);
    } else {
        res.redirect('/');
    }
}

module.exports.profile = function(req, res, next){
    Order.find({user: req.user}, function(err, orders){
        if(err){
            return res.write('Error!');
        }
        var cart;
        orders.forEach(function(order){
            cart = new Cart(order.cart);
            order.items= cart.generateArray();
        });
        res.render('user/profile',{orders: orders});
    }); 
}

