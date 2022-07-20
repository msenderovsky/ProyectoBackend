const {Schema, model} = require('mongoose')


const cartSchema = Schema({
    date: Date,
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }]
});

module.exports = model('carts', cartSchema);