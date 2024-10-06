import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export let adminLogin = createAsyncThunk(
  'auth/admin_login',
  async (adminInfo)=>{
    console.log('redux admin info',adminInfo);
    try {
      let {data}= await api.post('admin-login',adminInfo)
    } catch (error) {
      console.log('error hear');
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