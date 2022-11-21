import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    addedBy:{type:mongoose.Schema.Types.ObjectId,ref:"userdatas", required:true  },
    name:{type:String, required:true },
    phone:{type:String, required:true },
    address:{type:String, required:true },
    city:{type:String,required:true},
    state:{type:String, required:true },
    country:{type:String, required:true },
    user:{type:mongoose.Schema.Types.ObjectId,ref:"userdatas"}
    
   
})

const addressdata = mongoose.model("addressdata",addressSchema);

export default addressdata;