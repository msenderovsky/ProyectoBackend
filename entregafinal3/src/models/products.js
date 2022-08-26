const mongoose = require('mongoose')

const prodsSchema = new mongoose.Schema({
    category: String,
    name: String,
    description: String,
    imgage: String,
    price: Number
});

module.exports = mongoose.model('products', prodsSchema);
