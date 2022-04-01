

import React from "react";
import { Link } from "react-router-dom";
import { IntruccionesDetail } from "../components/instruccionDetail";
import { Loader } from "../components/loader";
import { useInstrucciones } from "../services/hook/useInstrucciones";


export const InstruccionesPage = () => {

    const {instrucciones,isLoading} = useInstrucciones()
    console.log(instrucciones)
    return(
        <div className="w-11/12 bg-opacity-25 bg-slate-100 min-h-screen rounded-md flex flex-col p-5 mx-auto my-2 flex-wrap gap-5 ">
            <h2 className="text-center text-5xl p-4 text-gray-800 border-b-2 mx-8 border-slate-800">Intrucciones</h2>
            <Link 
                to="/add-instrucciones"
                className="bg-green-500 text-slate-50 w-fit py-2 px-4 rounded-md 
                    hover:bg-green-300 hover:text-slate-500 transition-colors
                    self-end
                    mr-10 text-xl
                "
            >
                Crear nuevo
            </Link>

            {!isLoading
                ?( instrucciones 
                    ?  instrucciones.map(i => <IntruccionesDetail key={i.id} {...i}/>)
                    : "" 
                )
                :<Loader/>

            }
            
            
        </div>
    )
}