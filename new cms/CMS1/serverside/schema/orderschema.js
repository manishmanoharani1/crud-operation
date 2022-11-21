import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
 
  email:String,
  productname:String,
  category:String,
  quantity:Number,     
  price:Number,
  totalamount:Number,
  
});

const orderdatas = mongoose.model("orderdatas", orderSchema);

export default orderdatas;
