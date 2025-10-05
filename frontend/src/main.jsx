import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import 'react-toastify/ReactToastify.css';
import App from './App';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='First-container'>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
