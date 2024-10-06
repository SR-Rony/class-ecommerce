require('dotenv').config()
const app = require('./app')

const port = process.env.PORT


app.listen(port,()=>{
    console.log(`my server is runing at http://localhost:${port}`);
})