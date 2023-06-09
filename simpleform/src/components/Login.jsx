import CInput from './CInput'
import { useState } from 'react';

function Login() {
    const [loginState, setLoginState] = useState(true);
    if (loginState) {
        return (
            <div className='w-screen h-screen flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-96 m-auto bg-gray-100 rounded-lg p-12'>
                    <form className='flex flex-col items-center justify-center'>
                        <CInput label="Usuário" type="text"></CInput>
                        <CInput label="Senha" type="password"></CInput>
                        <button className='rounded-full px-4 py-3 bg-gray-800 border-spacing-1 hover:scale-[1.05] duration-200 w-48 text-lg font-semibold text-white mt-6'>Entrar</button>
                    </form>
                    <div className='bg-gray-200 flex flex-col items-center justify-center w-full rounded-xl mt-6 px-4 py-6'>
                        <h2 className="text-xl font-semibold leading-tight text-gray-800 text-center w-full whitespace-nowrap">Ainda não está cadastrado?</h2>
                        <button className='rounded-full px-4 py-3 bg-gray-600 border-spacing-1 hover:scale-[1.05] duration-200 w-48 text-lg font-semibold text-white mt-6'
                            onClick= {() => { setLoginState(false)}}
                        >Cadastre-se</button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='w-screen h-screen flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-96 m-auto bg-gray-100 rounded-lg p-12'>
                    <form className='flex flex-col items-center justify-center'>
                        <CInput label="Usuário" type="user"></CInput>
                        <CInput label="Senha" type="password"></CInput>
                        <CInput label="Repita a senha" type="password"></CInput>
                        <button type="button" className='rounded-full px-4 py-3 bg-gray-800  border-spacing-1 hover:scale-[1.05] duration-200 w-48 text-lg font-semibold text-white mt-6'
                                onClick={() => {
                                    const arrayDeInput=[...document.getElementsByTagName("input")];
                                    const arrayDeLabel=[...document.getElementsByTagName("label")];
                                    arrayDeInput.forEach(element => 
                                        {
                                        if(element.value==""){
                                            element.placeholder="Preencha esse campo";
                                            element.className+=" border-red-600"
                                        } else {
                                            element.className=("input mt-2 border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-offset-0 focus:shadow-outline focus:outline-blue-900 text-center")
                                            element.placeholder=". . .";
                                        }
                                    });
                                    
                                }}
                        > Cadastrar-se</button>
                    </form>
                    <div className='bg-gray-200 flex flex-col items-center justify-center w-full rounded-xl mt-6 px-4 py-6'>
                        <h2 className="text-xl font-semibold leading-tight text-gray-800 text-center w-full whitespace-nowrap">Já possui Cadastro?</h2>
                        <button className='rounded-full px-4 py-3 bg-gray-600 border-spacing-1 hover:scale-[1.05] duration-200 w-48 text-lg font-semibold text-white mt-6'
                            onClick={() => { setLoginState(true)}}
                        >Fazer login</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;