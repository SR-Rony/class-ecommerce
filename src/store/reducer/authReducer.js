import { createSlice } from '@reduxjs/toolkit'


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