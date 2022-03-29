

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IntruccionesDetail } from "../components/instruccionDetail";
import { getAllInstrucciones } from "../services/consejo-service";
import { Loader } from "../components/loader";

export const InstruccionesPage = () => {

    const [instrucciones, setIntrucciones] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        try {
            setIsLoading(true)
            const res = await getAllInstrucciones()
            const data = await res.json()

            if(!res.ok ) throw {status:res.status}
            console.log(data)
            setIntrucciones(data)
        } catch (err) {
            console.log(err)
        }
        finally{
            setIsLoading(false)
        }
        
    }, []);

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