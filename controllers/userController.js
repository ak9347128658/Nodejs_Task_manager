const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {User} = require('../models/index');
const dotenv = require('dotenv');
dotenv.config();

const register = async (req,res,next) => {
  try{
    const {username :email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
 
    const user = await User.create({
      email:email,
      password: hashedPassword
    });
    if(user){
        res.status(201).json({message: 'User Registered Successfully.'});
    }else{
        res.status(400).json({message: 'User Registration Failed or User Already exists.'});
    }
  }catch(error){
    console.log("Error in register function");
  }
   
}

const login = async (req,res,next) => {
   try{
    const {username :email,password} = req.body;                           
    // {
    //   username :"ak23lsdjlj",
    //   password: "Test@1234"
    // }
    const user = await User.findOne({where:{email:email}})
     if(!user){
        res.status(400).json({message: 'User not found.'});
     }
     const isMatch = await bcrypt.compare(password, user.password);
     if(!isMatch){
        res.status(400).json({message: 'Invalid password.'});
     }else{
        const token = jwt.sign(
          {userId:user.id,email:user.email},
          process.env.JWT_SECRET,
          {expiresIn: '2h'}
        );
        res.status(200).json({message: 'Authentication successfull.', token: token
            ,userId: user.id
        });
     }


   }catch(error){
     console.log("Error in login function");   
   }   
}


module.exports = {
  register,
  login
}