const mongoose = require("mongoose")
const { Schema ,model} = mongoose;
const bcrypt  = require("bcryptjs");

const userSchema= new Schema({
    name: {
        type : String,
        required:[true,"user name is require"],
        trim : true
    } ,
    email : {
        type : String,
        required : [true,"user email is require"],
        unique : true,
        trim : true,
        lowercase : true,
        Validate : {
            Validator : (v)=>{
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            },
            message : "Please inter a balide email"
        }

    },
    password : {
        type : String,
        required : [true,'user password is require'],
        min: [6, 'Must be at least 6, got {VALUE}'],
        set : (v)=>bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    }
  },{timestamps:true});

  const Users = model("Users",userSchema)

  module.exports = Users;

