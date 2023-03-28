import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import CInput from './components/CInput'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <div className='w-screen h-screen flex items-center justify-center'>
      <form className='flex flex-col items-center justify-center w-96 m-auto bg-gray-100 rounded-lg p-12' >
        <CInput label="Usuário" type="text"></CInput>
        <CInput label="Senha" type="password"></CInput>


        <button className='rounded-full px-4 py-3 bg-gray-800 border-spacing-1 hover:scale-[1.05] duration-200 w-48 text-lg font-semibold text-white mt-6'>Enviar</button>
      </form>
    </div>
  </React.StrictMode>,
)
