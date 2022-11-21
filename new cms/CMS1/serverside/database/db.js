import mongoose from "mongoose";

const Connection = async () =>{
    const URL = `mongodb+srv://Alpha:Alpha@tango.hmuzm.mongodb.net/cms_user`
    try{
        const DB_OPTION = {
            dbName:"cms_user" 
        };
        await mongoose.connect(URL,DB_OPTION );
        console.log("connected successful");
    }
    catch(error)
    {
        console.log(error);

    }
};
export default Connection;