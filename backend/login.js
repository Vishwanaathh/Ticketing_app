const mongoose=require('mongoose');
const express=require('express');
const User=require('./User');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const key='77777';



const app=express();
app.use(express.json());
app.use(cors());
app.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const found= await User.findOne({username,password});
    if(found){
       const token=jwt.sign({id:found._id,username:found.username},key,{expiresIn:'1min'})
       return res.status(200).json({message:"Login Succesful",token})
    }
    else{
       return res.status(400).json({message:"invalid credentials"});
    }
       

})
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    jwt.verify(token,key, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});
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