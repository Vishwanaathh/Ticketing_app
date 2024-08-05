const mongoose=require('mongoose');

const Schema=new mongoose.Schema(
    {
        Admin:String,
        Complaint:String,
        Date:String,
    
        
    }
);
const Ticket=mongoose.model('Ticket',Schema);
module.exports=Ticket;