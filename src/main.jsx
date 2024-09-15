import React from 'react'
import ThemeProvider from './context/ThemeProvider.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ThemeProvider>
 
)
