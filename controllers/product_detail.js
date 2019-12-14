var product_detail = require('../models/product_detail');

module.exports.productDetail = function(req, res, next) {
    products_detail.find(function(err, docs){    
     res.render('products/product_detail', { title: 'Shopping Cart', productsDetail: docs  });
    }); 
 }