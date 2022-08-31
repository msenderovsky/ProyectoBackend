

import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }],
    orderNumber: Number,
    date: Date,
    state: "generado",
    email: String,
    address: String
})


export default mongoose.model('orders', orderSchema)