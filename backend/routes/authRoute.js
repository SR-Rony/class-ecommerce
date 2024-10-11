const authRoute= require('express').Router()
const { adminLogin, handleLogin} = require('../controller/authController')
const { handleRegistation } = require('../controller/userController')


authRoute.post('/registation',handleRegistation)
authRoute.post('/login',handleLogin)
authRoute.post('/admin-login',adminLogin)


module.exports = authRoute