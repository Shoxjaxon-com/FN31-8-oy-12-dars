import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './App'  
import './index.css'
import {  GlobalContextProvider } from './contex/GlobolContext'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
    <RouterProvider router={router} />
    <ToastContainer position='top-center'/>
    </GlobalContextProvider>
  </React.StrictMode>
)
