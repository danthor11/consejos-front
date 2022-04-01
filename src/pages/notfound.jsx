import React from "react"
import { Link } from "react-router-dom"
import { isUserLogged } from "../services/login-services"
import  Error  from "../assets/404.png"


export const NotFound = () => {
    const isLogged = isUserLogged()
    return (
        <div className="min-h-screen">
            <div className="w-11/12 mx-auto my-2 bg-slate-50 border-2 gap-5 border-gray-50 p-8 flex flex-col rounded-md shadow-sm shadow-slate-600">
                <h2 className="text-4xl text-slate-700 text-center border-b-2 pb-3 border-slate-800">Pagina no encontrada</h2>
                <p className="text-xl text-slate-600 text-center  pb-3">Algunas paginas no podrian cargarse debido a que es necesario tener una sesión abierta.</p>
                <img 
                    src={Error} 
                    alt="404" 
                    className="h-auto w-2/4 mx-auto"
                />
                <Link to={"/"} className="bg-blue-700 w-fit mx-auto px-4 py-2 rounded-md
                    text-xl text-gray-50 font-medium
                    hover:text-slate-500 hover:bg-blue-300">Pagina principal</Link>


                {isLogged
                    ?  ""
                    : (<Link to="/login" className="bg-cyan-400 w-fit mx-auto px-4 py-2 rounded-md
                        text-xl text-gray-50 font-medium
                        hover:text-slate-500 hover:bg-cyan-300 
                    "> 
                        Iniciar Sesión
                    </Link>)  
                }

            </div>
        </div>
    )
}