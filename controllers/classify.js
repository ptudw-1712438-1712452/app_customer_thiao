var Product = require('../models/product');


module.exports.thethaomuahe =function(req, res, next) {
  var condition={title: 'trang phục thể thao mùa hè'};
    Product.find(condition,function( err, docs){     
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

module.exports.thethaomuadong = function(req, res, next) {
    Product.find({title: 'trang phục thể thao mùa đông'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 }
module.exports.trangphucnu = function(req, res, next) {
    Product.find({title: 'trang phục nữ'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 }
module.exports.trangsucnu = function(req, res, next) {
    Product.find({title: 'trang sức nữ'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 }
 module.exports.giaynu = function(req, res, next) {
    Product.find({title: 'giày nữ'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 }
 module.exports.trangphucnam = function(req, res, next) {
    Product.find({title: 'trang phục nam'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 }
 module.exports.trangsucnam = function(req, res, next) {
    Product.find({title: 'trang sức nam'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 }
 module.exports.giaynam = function(req, res, next) {
    Product.find({title: 'giày nam'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 }
 module.exports.banchaynhat = function(req, res, next) {
    Product.find({price: '20'},function(err, docs){     
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
 module.exports.Prada = function(req, res, next) {
    Product.find({price: '15'},function(err, docs){     
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
 module.exports.Salvatoreferragamo = function(req, res, next) {
    Product.find({price: '20'},function(err, docs){     
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
 module.exports.Fendi = function(req, res, next) {
    Product.find({price: '25'},function(err, docs){     
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
 module.exports.Givenchy = function(req, res, next) {
    Product.find({price: '30'},function(err, docs){     
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
 module.exports.search = function(req, res, next){
     const { term }= req.query;
      
     Product.find({  "description": { $regex: '.*' + term + '.*'}  },function(err, docs){     
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

 module.exports.price_1 = function(req, res, next){
    
    Product.find({  price: { $lte: 10}  },function(err, docs){     
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
 module.exports.price_2 = function(req, res, next){
    
    Product.find({  price: { $gt:10, $lt: 20 }  },function(err, docs){     
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
 module.exports.price_3 = function(req, res, next){
    
    Product.find({  price: { $gte: 20}  },function(err, docs){     
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
 