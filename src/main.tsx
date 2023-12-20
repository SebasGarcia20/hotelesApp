import React from 'react'
import ReactDOM from 'react-dom/client'
import { HotelsApp } from './HotelsApp.tsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HotelsApp />
  </React.StrictMode>,
)
