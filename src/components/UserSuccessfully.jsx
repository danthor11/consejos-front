import React from "react"

export const CreateUserSuccessfullyMessage = () =>{

    return(
        <div className="p-4 
            flex flex-col 
            justify-center 
            bg-slate-100  
            w-3/4 
            mt-14
            h-fit
            m-auto text-center
            rounded-md
            text-slate-700
            "  
        >
            <img src="src/assets/check.png" alt="check" className="w-3/5 h-auto m-auto"/>
            <h2 className="text-2xl">Registro de usuario exitoso</h2>
            <p>
                Ya puede proceder a {" "}
                <a href="" className="border-solid border-slate-900 border-b">Iniciar Sesión</a>
                .
            </p>   
        </div>
    )
}