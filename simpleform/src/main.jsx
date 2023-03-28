import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import CInput from './components/CInput'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <div className='flex flex-col items-center justify-center w-96 m-auto mt-96' >
      <CInput label="Usuário" type="text"></CInput>
      <CInput label="Senha" type="password"></CInput>
    </div>
  </React.StrictMode>,
)
