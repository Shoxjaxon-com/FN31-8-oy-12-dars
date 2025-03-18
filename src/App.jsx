import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import MainLeyauts from './Leyauts/MainLeyauts'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
   <div className='container mx-auto mt-5'>
     <Routes>
        <Route path='/' element={<MainLeyauts><Home /></MainLeyauts>} />
        <Route path='about' element={<MainLeyauts><About /></MainLeyauts>} />
        <Route path='contact' element={<MainLeyauts><Contact /></MainLeyauts>} />
        <Route path='*' element={<MainLeyauts><ErrorPage></ErrorPage></MainLeyauts>} />
    </Routes>
   </div>
  )
}

export default App
