require('dotenv').config()
const app = require('./app');
const connectDB = require('./config/connectDB');

const port = process.env.PORT


app.listen(port, async()=>{
    console.log(`my server is runing at http://localhost:${port}`);
   await connectDB()
})