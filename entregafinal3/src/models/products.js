const mongoose = require('mongoose')

const prodsSchema = new mongoose.Schema({
    timestamp: Date,
    name: String,
    description: String,
    code: Number,
    imgage: String,
    price: Number,
    stock: Number
});

module.exports = mongoose.model('products', prodsSchema);
