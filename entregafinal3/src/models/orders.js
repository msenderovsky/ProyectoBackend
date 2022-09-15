import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products: [],
    orderNumber: Number,
    date: Date,
    state: String,
    email: String,
    address: String
})


export default mongoose.model('orders', orderSchema)