const express= require('express');
const ensureAuthenticated = require('../middlewares/Auth');
const router = express.Router();


router.get('/',ensureAuthenticated,(req,res)=>{
    console.log('logged in user detail',req.user);
    res.status(200).json([
        {
            name:"mobile",
            price:1000
        },
        {
            name:"mobile",
            price:1000
        },
    ])
});


module.exports=router;