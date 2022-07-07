import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifApp } from './GifApp'
import './style.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>
)
