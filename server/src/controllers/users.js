const user=require('../models/users')
const registerNewUser=async(req, res) => {
  const existinguser= await user.findOne({phoneNumber:req.body.phoneNumber})
  if(existinguser) {
    res.status(403).json({
     msg:"user already exist"
    })
  }else{
    await user.create(req.body)
  }
  res.json({
      msg:'registered successfully'
    })
  }
  module.exports={registerNewUser}