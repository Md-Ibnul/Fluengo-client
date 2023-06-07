import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes'
import React from 'react'
import AuthProvider from './Providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster />
  <RouterProvider router={router} />
</AuthProvider>
)
