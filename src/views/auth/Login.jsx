import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data,setData] = useState({
    email:'',
    password:''
  })

  const handleChange = (e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit =(e)=>{
    console.log(data);
    e.preventDefault()
  }


  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-gray-500">
      <div className="p-6 bg-slate-950 rounded-md">
        <h1 className="text-3xl text-white font-bold text-center mb-4 text-shadow">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label for="email" className="input-label">
              Email
            </label>
            <input id="email" name="email" type="email" className="input" onChange={handleChange} />
          </div>
          <div>
            <label for="password" className="input-label">
              Password
            </label>
            <div className="relative">
              <input
                className="input pr-8"
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange} 
              />

              {showPassword ? (
                <FaEye
                  className="text-white absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeSlash
                  className="text-white absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer "
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          <button type="submit" className="bg-gradient-to-r from-lime-500 to-lime-600 text-white py-2 mt-3 px-5 rounded-full block w-full hover:bg-gradient-to-r hover:from-lime-600 hover:to-lime-500 hover:scale-105 transition-all duration-300 shadow-custom-inset;">Login</button>
        </form>
        <p className="text-center text-white text-sm my-3">or login with</p>
        <div className="flex gap-6 justify-center">
          <div className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300 cursor-pointer">
            <FcGoogle className="text-3xl" />
          </div>
          <div className="bg-blue-600 w-9 h-9 rounded-full flex items-center justify-center shadow-custom-inset hover:scale-110 transition-all duration-300 cursor-pointer">
            <FaFacebookF className="text-2xl text-white" />
          </div>
        </div>
        <Link to={'/registation'}
          className="text-center block text-white text-sm my-3 hover:text-lime-100 cursor-pointer text-shadow"
        >
          No Account? create Signup here
        </Link>
      </div>
    </div>
  )
}

export default Login