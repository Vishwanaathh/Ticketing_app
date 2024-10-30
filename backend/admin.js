const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const Domain=require('./domain');


const app=express();
const Ticket=require('./ticket');
app.use(cors());
app.use(express.json());
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, '7777', (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }

        req.user = user;
        next();
    });
}

app.post('/login/:secretKey',async(req,res)=>{
    const {secretKey}=req.params;

    const domain= await Domain.findOne({secretKey});
    if (!domain) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }
    const payload={secretKey:domain.secretKey};
    const token = jwt.sign(payload, '7777', { expiresIn: '1h' });
    res.json({token});

});
app.get('/',(req,res)=>{
    res.send("Welcome to admin server");
})
app.get('/Allcomplaints',authenticateToken,async(req,res)=>{
    const data= await Ticket.find({});
    res.json(data);
})
app.get('/complaints/:admin',authenticateToken,async(req,res)=>{
    const admin = req.params.admin;

   const data= await Ticket.find({Admin:admin});
   
   res.json(data);

})

app.delete('/deleteComplaints/:admin',async(req,res)=>{
    const admin=req.params.admin;
    const result=await Ticket.deleteMany({Admin:admin});
    res.send("deleted");
})

mongoose.connect()
.then(
    app.listen(3002,()=>{
        console.log('Listening');
    })
);
