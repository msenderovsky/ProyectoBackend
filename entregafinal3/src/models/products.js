import mongoose from "mongoose";

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

export default mongoose.model('products', prodsSchema);
