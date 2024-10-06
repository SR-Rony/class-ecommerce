const express = require('express')
const authRoute = require('./routes/authRoute')
const cors = require('cors')
let app = express()

app.use(cors({
    origin:['http://localhost:1010']
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// user auth route
app.use('/api',authRoute)

module.exports = app