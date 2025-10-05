const express= require('express');
const router = express.Router();
const { signup, login } = require('../controller/AuthController');
const { signupValidation,loginValidation } = require('../middlewares/AuthValidation');
// const router =require('express').Router();


router.post('/login',loginValidation,login);
router.post('/signup',signupValidation,signup);

module.exports=router;