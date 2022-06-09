const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },

    password: {
        type:String,
        required:true
    },

    confirmpassword: {
        type:String,
        required:true
    },
    name: {
        type:String,
        required:false
    },
    telephone: {
        type:String,
        required:false
    }
})

// Collection

const Register = new mongoose.model("Register", userSchema);

module.exports = Register;