import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Reset } from './assets/styles/reset'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Reset/>
    <App />
  </React.StrictMode>
)
