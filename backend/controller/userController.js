const createError = require("http-errors")
const jwtActivationKey = process.env.JWT_ACTIVATION_KEY
const clientUrl = process.env.CLIENT_URL

const { createJsonWebToken } = require('../helper/jsonwebToken')
const User = require('../models/userModel')
const emailNodmailer = require("../helper/email")
const { successRespons } = require("./responesController")


const handleRegistation = async(req,res)=>{
    try{
        const {name,email,password,}=req.body;
        console.log(name,email,password);
        
        // email exisits chack
        const userExists = await User.exists({email:email})
        if(userExists){
            throw createError(409,"user with this email already exists.please login")
        }
        // create jsonwebtoken 
       const token = createJsonWebToken({name,email,password,},jwtActivationKey,"10m")

        // prepare email
        const emailData = {
            email:email,
            subject:"action activation email",
            html:`
                <h1>Hello ${name}</h1>
                <p>please click hear to <a href="${clientUrl}/verify/${token}" target="_blank">activet your email</a></p>
            `
        }
        try{
            // send email with nodemailer
          await emailNodmailer(emailData)
          
        }catch(emailError){
            next(createError(500,"fail to verification email "))
            return
        }
        //    success respons function
        return successRespons(res,{
            statusCode:200,
            message:`please go to your ${email} for compleating your registaion prosses`,
            paylod :{
                token:token
            }
        })

    }catch(error){
        // next(error)
        console.log(error);
    }
}

module.exports={
    handleRegistation,
}