const adminLogin = (req,res)=>{
    console.log('data',req.body);
}
// 
const adminUser = (req,res)=>{
    res.send('i am admin user')
}


module.exports={
    adminLogin,
    adminUser
}