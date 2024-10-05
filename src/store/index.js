import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducers'

const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultmiddleware) =>{
    return getDefaultmiddleware({
        serializableCheck:false
    })
  }
})

export default store