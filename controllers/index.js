var Product = require('../models/product');
var Cart = require('../models/cart');
var Order = require('../models/order');

module.exports.index = function(req, res, next) {
  var successMsg = req.flash('success')[0];
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
     res.render('shop/index', { title: 'Shopping Cart', products: productChunks.slice(start, end) ,successMsg: successMsg, noMessages: !successMsg  });
    }); 
 }
 module.exports.productdetail = async (req, res, next) =>{
  const productId = req.params.id; 
  const product = await Product.find({_id: productId});
  
   Product.find({title: product.title},function(err,docs){
  
    res.render('shop/product_detail', { product: product, products: docs });  
     
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
module.exports.checkout = function(req,res, next){ 
  if(!req.session.cart){
    return res.redirect('/shopping-cart');
  }
  var errMsg = req.flash('error')[0];
  res.render('shop/checkout',{errMsg: errMsg, noError: !errMsg });
}
module.exports.postCheckout = function(req, res, next){
  if(!req.session.cart){
    return res.redirect('/shopping-cart');
  }
  var cart =new Cart(req.session.cart);
  var stripe = require("stripe")("sk_test_LtWM5l2cRmp31sE2pnQfZwwA00JAVagfgi");
  stripe.charges.create({
    amount: cart.totalPrice*100,
    currency: "usd",
    source: req.body.stripeToken,
    description:"Test Charge"
  }, function(err, charge){
      if(err){
        req.flash('error', err.message);
        return res.redirect('/checkout');
      }
      var order = new Order({
        user: req.user,
        cart: cart,
        address: req.body.address,
        name: req.body.name,
        paymentId: charge.id
      });
      order.save(function(err, result){
        req.flash('success','Đặt mua hàng thành công!');
        req.session.cart = null;
        res.redirect('/');
      });     
  });
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

