import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './App'  
import './index.css'
import {  GlobalContextProvider } from './contex/GlobolContext'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Provider } from 'react-redux'
import store from './store/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GlobalContextProvider>
    <RouterProvider router={router} />
    <ToastContainer position='top-center'/>
    </GlobalContextProvider>
    </Provider>
)
