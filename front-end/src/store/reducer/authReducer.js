import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../api/api';

// user registation data
export let userRegistation = createAsyncThunk(
  'auth/user_registation',
  async (userInfo)=>{
    console.log(' data',userInfo);
    try {
      let {data}= await api.post('/registation',userInfo)
    } catch (error) {
      console.log('error hear',error);
    }
  }
)

// user Login data
export let userLogin = createAsyncThunk(
  'auth/user_login',
  async (userInfo)=>{
    console.log('data',userInfo);
    try {
      let {data}= await api.post('/login',userInfo)
    } catch (error) {
      console.log('error hear',error);
    }
  }
)

// admin registation data
export let adminRegistation = createAsyncThunk(
  'auth/admin_registation',
  async (userInfo)=>{
    console.log('data',userInfo);
    try {
      let {data}= await api.post('/admin-registation',userInfo)
    } catch (error) {
      console.log('error hear',error);
    }
  }
)
// admin Login data
export let adminLogin = createAsyncThunk(
  'auth/admin_login',
  async (userInfo)=>{
    try {
      let {data}= await api.post('/admin-login',userInfo)
    } catch (error) {
      console.log('error hear',error);
    }
  }
)



export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    successMessage:"",
    errorMessage: "",
    loader:false,
    userInfo:null
  },
  reducers :{

  }
  
})

export default authSlice.reducer