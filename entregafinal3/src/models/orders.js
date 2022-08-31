const {Schema, model} = require('mongoose')

const orderSchema = new Schema({
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }],
    orderNumber: Number,
    date: Date,
    state: "generado",
    email: String,
    address: String
})


module.exports = model('orders', orderSchema)