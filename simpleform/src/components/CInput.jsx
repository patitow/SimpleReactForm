import '../css/index.css'

//componente input customizado que recebe propriedades de type e label.
function CInput({label,type}) {

    const typesOfInput = ["button","checkbox","color","date","datetime","datetime-local","email","file","hidden","image","month","number","password","radio","range",
    "reset","search","submit","tel","text","time","url","week"];
    
    return (
        <>
            <label className="text-lg font-semibold leading-tight text-gray-800 text-center mt-3" for={label}>
                {label.charAt(0).toUpperCase() + label.slice(1)}
            </label>
            <input className="border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-offset-0 focus:shadow-outline focus:outline-blue-900 text-center" 
            id={label} 
            type={typesOfInput.indexOf(type) === -1 ? "text" : type }
            placeholder=". . ."></input>
        </>
    )

    
}

export default CInput