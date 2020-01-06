var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    id_sp: {type: String, required: true},
    email: {type: String, required: true},
    content: {type: String, required: true}  
});
module.exports =mongoose.model('Comment', schema);