var express = require('express');
var router = express.Router();
var Product = require('../models/product');


/* GET home page. */
router.get('/', function(req, res, next) {
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
});

module.exports = router;
