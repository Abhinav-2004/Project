const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5173',
}));

app.get('/test',(req,res)=>{
    res.json("Test OK");
});

app.listen(4000);