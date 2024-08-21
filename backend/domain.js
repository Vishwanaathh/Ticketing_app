const mongoose=require('mongoose');

const Schema=new mongoose.Schema(
    {
        secretKey:String 

    
        
    }
);
const Domain=mongoose.model('Domain',Schema);
module.exports=Domain;