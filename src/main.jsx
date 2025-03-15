import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
=======
    <BrowserRouter  basename="/netflixclone>
>>>>>>> 5a2437b008305c1adb8d863c014b5babdb92e855
    <App />
    </BrowserRouter>
    
  </StrictMode>,
)
