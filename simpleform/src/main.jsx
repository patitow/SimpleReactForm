import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import Header from './components/Header'
import Login from './components/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Login></Login>
  </React.StrictMode>,
)
