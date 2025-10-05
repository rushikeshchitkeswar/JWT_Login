const express = require('express');
const app=express();
const cors= require('cors');
const AuthRouter = require('./routes/AuthRouter');
const ProductRouter = require('./routes/ProductRouter');
require('dotenv').config();
require('./model/db')

app.get('/',(req,res)=>{
    res.send("hello");
})


app.use(express.json());
app.use(cors());

app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);

PORT=process.env.PORT || 6500
app.listen(PORT,()=>{
    console.log(`the server is running on PORT ${PORT}`)
})