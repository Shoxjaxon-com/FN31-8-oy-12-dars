import React, { Children } from 'react'
import Navbar from '../componets/Navbar'
function MainLeyauts({children}) {
  return (
    <div>
        <Navbar></Navbar>
        {children}  
  </div>
  )
}

export default MainLeyauts
