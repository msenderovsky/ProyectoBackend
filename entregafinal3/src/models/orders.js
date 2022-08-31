const {Schema, model} = require('mongoose')

const orderSchema = new Schema({
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }],
    orderNumber: String,
    date: Date,
    state: String,
    email: String
})


module.exports = model('orders', orderSchema)