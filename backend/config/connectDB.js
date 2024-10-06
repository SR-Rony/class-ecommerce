const mongoose = require("mongoose")
const mongoUrl = process.env.MONGO_URL 


const connectDB = async()=>{
    try{
        await mongoose.connect(mongoUrl)

        console.log('server is connect');

        mongoose.connection.on("error",(error)=>{
            console.error('server is not connect')
        })
    }catch(error){
        // console.error(`error hear : ${error}`);
        console.error(`error hear :`);
    }
}

module.exports = connectDB