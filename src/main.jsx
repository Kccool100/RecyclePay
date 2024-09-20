import React from 'react'
import ThemeProvider from './context/ThemeProvider.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './Global/Store.js'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
  
    </Provider>
    <React.StrictMode>
    
    </React.StrictMode>,
  </ThemeProvider>
 
)
