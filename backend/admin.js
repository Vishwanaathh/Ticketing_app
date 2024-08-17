const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
const Ticket=require('./ticket');
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Welcome to admin server");
})
app.get('/Allcomplaints',async(req,res)=>{
    const data= await Ticket.find({});
    res.json(data);
})
app.get('/complaints/:admin',async(req,res)=>{
    const admin = req.params.admin;

   const data= await Ticket.find({Admin:admin});
   
   res.json(data);

})
app.delete('/deleteComplaints/:admin',async(req,res)=>{
    const admin=req.params.admin;
    const result=await Ticket.deleteMany({Admin:admin});
    res.send("deleted");
})

mongoose.connect('mongodb+srv://admin:root@cluster0.mtdfqct.mongodb.net/TICKETS?retryWrites=true&w=majority&appName=Cluster0')
.then(
    app.listen(3002,()=>{
        console.log('Listening');
    })
);
