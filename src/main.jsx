import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Section1 from './Section1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Section1 /> 
  </StrictMode>,
)
