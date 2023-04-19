const express = require('express');
const cors = require('cors');
const {mongoose, models } = require('mongoose');
const User = require('./models/user.js');
const bcrypt = require('bcryptjs');

const bcryptSalt = bcrypt.genSaltSync(10);
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5173',
}));

app.get('/test',(req,res)=>{
    mongoose.connect(process.env.MONGO_URL);
    res.json("Test OK");
});

app.post('/register', async(req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const {name,email,password} = req.body;
    try{
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password, bcryptSalt),
        });
        res.json(userDoc);
    }
    catch{
        res.status(422).json(e);
    }
});

app.post('/login', async(req,res) =>{
    await mongoose.connect(process.env.MONGO_URL);
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if(userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk){
            
            res.status(422).charsetjson("Password verified");
        }
        else{
            res.json("Password not matching");
        }
    }
    else{
        res.json('not found');
    }
});

app.listen(4000);