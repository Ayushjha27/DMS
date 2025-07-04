const jwt = require('jsonwebtoken');
const UserModel = require('../Models/user');

exports.studentAuth = async(req,res,next)=>{
    try {
        const token = req.cookies.token;

        if(token){
           const decode = jwt.verify(token,"Its_My_Secret_Key");
           req.user = await UserModel.findById(decode.userId).select('-password');
           next();
        }else{
            return res.status(401).json({error:"No token,authentication denied"});
        }
    } catch (err) {
      res.status(401).json({
        error:"Something went wrong in Authnetication"
      }); 
    }
}


exports.adminFacultyAuth = async(req,res,next)=>{
    try {
        const token = req.cookies.token;

        if(token){
           const decode = jwt.verify(token,"Its_My_Secret_Key");
           req.user = await UserModel.findById(decode.userId).select('-password');

           if(req?.user?.role === "student"){
            throw new Error("You don't access to this page");
           }
           next();
        }else{
            return res.status(401).json({error:"No token,authentication denied"});
        }
    } catch (err) {
      res.status(401).json({
        error:"Something went wrong in Authnetication"
      }); 
    }
}