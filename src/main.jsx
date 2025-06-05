import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
        <App />
    </AuthProvider>
    <ToastContainer theme="light" position="top-center" pauseOnHover/>  
  </BrowserRouter>,
)
