const express = require('express')
const authRoute = require('./routes/authRoute')
let app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))


// user auth route
app.use('/api',authRoute)

module.exports = app