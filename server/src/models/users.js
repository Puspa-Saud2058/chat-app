const mongoose = require('mongoose')
const { Schema } = mongoose;
// define shape of the User documents in the collection
const userSchema = new Schema({
  phoneNumber: String,
  email:String, // String is shorthand for {type: String}
  password: String,
  role: {
    type: String,
    enum : ['user', 'Admin'],
    default: 'user'
    }
});


const User = mongoose.model('User', userSchema);
module.exports = User
