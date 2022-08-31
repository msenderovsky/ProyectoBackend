const mongoose = require('mongoose')

const prodsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true  
    }, 
    price: {
        type: Number,
        required: true
    }, 
    stock: {
        type: Number,
        required: true
    }, 
    cant: {
        type:Number
    }
})

module.exports = mongoose.model('products', prodsSchema);
