import React from 'react'
import { useContext } from 'react'
import { GlobolContext } from '../contex/GlobolContext'
function LikkedImages() {
    const data = useContext(GlobolContext)
    console.log(data);
    
  return (
    <div>
      
    </div>
  )
}

export default LikkedImages
