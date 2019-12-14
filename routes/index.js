var express = require('express');
var router = express.Router();
var controller = require('../controllers/index');

/* GET home page. */
router.get('/', controller.index);
router.get('/add-to-cart/:id', controller.addToCart);
router.get('/shopping-cart', controller.shoppingCart);
router.get('/reduce/:id', controller.reduce);
router.get('/increase/:id', controller.increase);
router.get('/deleteall/:id', controller.deleteAll);
router.get('/product_detail/:id',controller.productdetail);
module.exports = router;
