var Product = require('../models/product');
var Cart = require('../models/cart');

module.exports.index = function(req, res, next) {
    Product.find(function(err, docs){
      var productChunks = [];
      var chunkSize = 4;     
      for (var i=0; i< docs.length ; i += chunkSize){
        productChunks.push(docs.slice(i, i+chunkSize));
      }   
      var page = parseInt(req.query.page) || 1;
      var perPage= 2;
      var start = (page - 1)*perPage;
      var end = page * perPage;    
     res.render('shop/index', { title: 'Shopping Cart', products: productChunks.slice(start, end)  });
    }); 
 }

module.exports.productdetail = function(req, res, next){
  var productId = req.params.id;
  
  Product.findById(productId, function(err, product){
    res.render('shop/product_detail', { title: 'Shopping Cart', products: product  });   
  });
}

module.exports.addToCart = function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {items: {}});
  Product.findById(productId, function(err, product){
    if(err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
 }

module.exports.shoppingCart = function(req, res, next){
   if(!req.session.cart){
     return res.render('shop/shopping-cart', {products: null});
   }
   var cart =new Cart(req.session.cart);
   res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice, totalQty: cart.totalQty } );
 }

module.exports.reduce = function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {items: {}});
  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
}

module.exports.increase = function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {items: {}});
  cart.increaseByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
}

module.exports.deleteAll = function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart: {items: {}});
  cart.deleteAll(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
}