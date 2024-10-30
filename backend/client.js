const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const Ticket=require('./ticket');
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Welcome to client server");
});
app.post('/raiseTicket',async(req,res)=>{
    const ticket=req.body;
    await Ticket.create((ticket));
    res.send("Ticket Created!");
})
    

mongoose.connect()
.then(
app.listen(3003,()=>{
    console.log('Listening');
}));
