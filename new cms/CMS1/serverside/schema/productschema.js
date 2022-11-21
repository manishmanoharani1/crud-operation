import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    stockvalue: Number,
    description: String

});

const Product =  mongoose.model("products", productSchema);

export default Product;
