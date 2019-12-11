var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/thethaomuahe', function(req, res, next) {
    Product.find({title: 'trang phục thể thao mùa hè'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 });
 router.get('/thethaomuadong', function(req, res, next) {
    Product.find({title: 'trang phục thể thao mùa đông'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 });
 router.get('/trangphucnu', function(req, res, next) {
    Product.find({title: 'trang phục nữ'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 });
 router.get('/trangsucnu', function(req, res, next) {
    Product.find({title: 'trang sức nữ'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 });
 router.get('/giaynu', function(req, res, next) {
    Product.find({title: 'giày nữ'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 });
 router.get('/trangphucnam', function(req, res, next) {
    Product.find({title: 'trang phục nam'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 });
 router.get('/trangsucnam', function(req, res, next) {
    Product.find({title: 'trang sức nam'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 });
 router.get('/giaynam', function(req, res, next) {
    Product.find({title: 'giày nam'},function(err, docs){     
        var productChunks = [];
        var chunkSize = 4;     
        for (var i=0; i< docs.length ; i += chunkSize){
          productChunks.push(docs.slice(i, i+chunkSize));
        }             
       res.render('shop/index', { title: 'Shopping Cart', products: productChunks  });
      }); 
 });
 router.get('/banchaynhat', function(req, res, next) {
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
 });
 router.get('/Prada', function(req, res, next) {
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
 });
 router.get('/Salvatoreferragamo', function(req, res, next) {
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
 });
 router.get('/Fendi', function(req, res, next) {
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
 });
 router.get('/Givenchy', function(req, res, next) {
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
 });
 module.exports = router;