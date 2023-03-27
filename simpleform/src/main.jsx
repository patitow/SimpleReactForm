import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import CInput from './components/CInput'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CInput label="teste" type="number"></CInput> */}
    <Header></Header>
  </React.StrictMode>,
)
