import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//define schema 
const cmsSchema = new mongoose.Schema({
    name:{type:String, required:true , trim:true },
    email:{type:String, required:true },
    password:{type:String,required:true},
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})
//use as a plugin

//model



cmsSchema.pre('save',async function (next) {
    
    if(this.isModified('password'))
    { this.password = await bcrypt.hash(this.password, 2); }
    next();
} );

//we are generate token
cmsSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, "MYNAMEISSHUBHAMDHOOTFROMJODHPUR",{expiresIn: '1d'} );
        this.tokens = this.tokens.concat({token:token});
       await this.save()
       
       return token;
       
    }
    catch(error){console.log(error);}
}

const CmsSchema = mongoose.model( "cms_user" , cmsSchema )

export default CmsSchema;