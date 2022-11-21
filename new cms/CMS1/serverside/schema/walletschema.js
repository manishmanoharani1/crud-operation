
import mongoose from 'mongoose';

const walletSchema = new mongoose.Schema({
    
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"userdatas", required:true  },
    transaction:{type:String, required:true },
    //type:{type:String},

   
    
   
})

const walletdata = mongoose.model("walletdata",walletSchema);


export default walletdata;