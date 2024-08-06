const mongoose=require('mongoose');
const express=require('express');
const User=require('./User');

const app=express();
app.use(express.json());
app.get('/login',async(req,res)=>{
       const data= await User.find({});
       res.json(data);

})
app.post('/Sign',async(req,res)=>{
    const Userr=req.body;
    await User.create(Userr);
    res.send("created");
})
mongoose.connect('mongodb+srv://admin:root@cluster0.mtdfqct.mongodb.net/Clients?retryWrites=true&w=majority&appName=Cluster0')
.then(
app.listen(3005,()=>{
    console.log("Listening");
}));