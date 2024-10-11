import React, { useState } from 'react'
import Router from './route/Router'
import publicRoute from './route/routes/PublicRoute'
import ProtectedRoute from './route/routes/ProtectedRoute'


function App() {

  const [allRoute,setAllroute] = useState([...publicRoute,...ProtectedRoute])

  return (
    <>
      <Router allRoute={allRoute}/>
    </>
  )
}

export default App
