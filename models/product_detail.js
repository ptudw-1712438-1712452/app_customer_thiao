var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    imagePath_1: {type: String, required: true},
    imagePath_2: {type: String, required: true},
    imagePath_3: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required:true},
    Characteristics: {type: String, required:true},
    promotion: {type: String, required:true},
    price: {type: Number, required: true}
});

module.exports =mongoose.model('productDetail', schema);