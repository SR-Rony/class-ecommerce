import React, { useState } from 'react'
import Router from './route/Router'
import publicRoute from './route/routes/PublicRoute'


function App() {

  const [allRoute,setAllroute] = useState([...publicRoute])

  return (
    <>
      <Router allRoute={allRoute}/>
    </>
  )
}

export default App
