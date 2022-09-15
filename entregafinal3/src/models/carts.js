import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    date: Date,
    products: []
});

export default mongoose.model('carts', cartSchema);