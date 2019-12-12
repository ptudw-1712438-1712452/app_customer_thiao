var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);
var passport= require('passport');

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
    successRedirect: '/',
    failureRedirect: '/user/signup',
    failureFlash: true
})
module.exports.postSignin = passport.authenticate('local.signin',{
    successRedirect: '/',
    failureRedirect: '/user/signin',
    failureFlash: true
})
