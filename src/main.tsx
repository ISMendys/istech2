import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // <-- Importe aqui
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>  {/* <-- Adicione esta linha */}
      <App />
    </BrowserRouter> {/* <-- E esta linha */}
  </React.StrictMode>,
)