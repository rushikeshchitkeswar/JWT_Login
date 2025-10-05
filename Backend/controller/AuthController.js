const bcrypt = require('bcrypt');
const {UserModel} = require('../model/Users');
const jwt=require('jsonwebtoken');


const signup=async(req,res)=>{
    try{
       const {name,email,password}=req.body;
       const user= await UserModel.findOne({email});

       if(user){
        return res.status(409).json({
            message: 'user is already exist, you can login',
            sucess:false
        });
       }
       
      const userModel=new UserModel({name,email,password});
      userModel.password= await bcrypt.hash(password,10);
       await userModel.save();
       res.status(201).json({
        message:"Singup successfully",
        success:true
       });
       
    }
    catch(err){
        // console.log(err)
      res.status(500).json({
        message:`internal server error ${err} `,
        success:false,
        error:err
       })
    }
}

//login

const login=async(req,res)=>{
    try{
       const {email,password}=req.body;
       const user= await UserModel.findOne({email});
       const errormsg='Auth failed email or password is wrong'
       if(!user){
        return res.status(409).json({
            message:errormsg,
            sucess:false
        });
       }
       
       const ispassEqual= await bcrypt.compare(password,user.password);
       if(!ispassEqual){
        return res.status(409).json({
            message:errormsg,
            sucess:false
        });
       }
       const jwtToken=jwt.sign(
        {emial:user.email,_id:user._id},
        process.env.JWT_SECRET_KEY,
        {expiresIn:'24h'}
       )
       res.status(200).json({
        message:"login successfully",
        success:true,
        jwtToken,
        email,
        name:user.name
       });
       
    }
    catch(err){
        // console.log(err)
      res.status(500).json({
        message:`internal server error ${err} `,
        success:false,
        error:err
       })
    }
}



module.exports={signup,login}