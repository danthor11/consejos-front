import React from "react"
import { isUserLogged } from "../services/login-services"
import { Link } from "react-router-dom"
import { Consejos } from "./Consejos"

export const MainPage = () => {
    const isLogged = isUserLogged()
    console.log(isLogged)
    return (
        <div className="min-h-screen">
            <div className="w-11/12 mx-auto my-2 bg-slate-50 border-2 gap-5 border-gray-50 p-8 flex flex-col rounded-md shadow-sm shadow-slate-600">
                <h2 className="text-4xl text-slate-700 text-center border-b-2 pb-3 border-slate-800">Bienvenido al sitio de Consejos de la UNEG</h2>
                <div className="text-slate-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident nihil vel obcaecati eius dolor error nulla delectus dolores quibusdam blanditiis dolorem culpa recusandae officia voluptate iure, nam est facilis?
                </div>
                {isLogged
                    ?  <Consejos/>
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