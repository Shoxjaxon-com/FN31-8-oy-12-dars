import React from 'react'
import { useContext } from 'react'
import { useGlobalContext } from '../hook/useGlobalContext'
import ImgContainer from '../componets/ImgConteiner'
import { Link } from 'react-router-dom'
function LikkedImages() {
    const {likedImages} = useGlobalContext()
    if(likedImages.length == 0){
      return <div className='h-full flex justify-center items-center gap-10 flex-col'>
        <h1 className='text-center text-4xl'>You don't choose andy images yet !</h1>
        <Link to='/' className='btn btn-primary'>Go home</Link>
      </div>
    }    
  return (
    <div className='container mx-auto'>
        {likedImages.length > 0 && <ImgContainer  images={likedImages}/>}
    </div>
  )
}

export default LikkedImages
