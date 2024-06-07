const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

const authMiddleware = async (req,res,next) =>{
  try{
    // "Bearer lsdkjfla;sjdf;lasjdflasjdflasdsadkfjaslkdfjasdl;j" after .splic(' ') 
    // -> ["Bearer","lsdkjfla;sjdf;lasjdflasjdflasdsadkfjaslkdfjasdl;j"]

    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.userData = decoded; //{userId,email}
    next();
  }catch(error){
    console.log(error);
    res.status(401).json({message: 'Authentication failed.'});
  }
}

module.exports = authMiddleware;