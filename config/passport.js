var passport = require('passport');
var User= require('../models/user');
var LocalStrategy = require('passport-local').Strategy;


passport.serializeUser(function(user, done){
    done(null, user.id);  
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){         
    req.checkBody('email','Email không hợp lệ!').notEmpty().isEmail();
    req.checkBody('password','Mật khẩu không hợp lệ! (Ít nhất 6 ký tự hoặc mật khẩu nhập lại chưa đúng) ').notEmpty().isLength({min: 6}).equals(req.body.cofirmPassword);
    var errors= req.validationErrors();
    if(errors){
        var message=[];
        errors.forEach(function(error){
            message.push(error.msg);
        });
        return done(null, false, req.flash('error', message));
    }
    User.findOne({'email': email}, function(err, user){
        if(err){
            return done(err);
        }
        if(user){
            return done(null, false, {message: 'Email đã tồn tại'});
        }
        var newUser = new User();
        newUser.email= email;
        newUser.password= newUser.encryptPassword(password);
        newUser.save(function(err, result){
            if(err){
                return done(err);
            }
            return done(null, newUser);
        });
    });
}));

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){
    req.checkBody('email','Email không hợp lệ!').notEmpty().isEmail();
    req.checkBody('password','Mật khẩu không hợp lệ! (Ít nhất 6 ký tự)').notEmpty();
    var errors= req.validationErrors();
    if(errors){
        var message=[];
        errors.forEach(function(error){
            message.push(error.msg);
        });
        return done(null, false, req.flash('error', message));
    }
    User.findOne({'email': email}, function(err, user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false, {message: 'Tài khoản không tồn tại!'});
        }
        if(!user.validPassword(password)){
            return done(null, false, {message: 'Sai mật khẩu!'});
        }
        return done(null, user);
    });
}));