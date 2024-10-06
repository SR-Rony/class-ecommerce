const authRoute= require('express').Router()
const { adminLogin, adminUser } = require('../controller/authController')


authRoute.get('/admin-user',adminUser)
authRoute.post('/admin-login',adminLogin)


module.exports = authRoute