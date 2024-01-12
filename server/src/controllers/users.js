const user=require('../models/users')
const registerNewUser=(req, res) => {
    res.json({
      msg:'registered successfully'
    })
  }
  module.exports={registerNewUser}