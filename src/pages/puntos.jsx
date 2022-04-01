import { useEffect, useState } from "react"
import { getPuntos } from "../services/consejo-service";
import { Link } from "react-router-dom";
import { PuntoDetail } from "../components/PuntoDetails";
import { Loader } from "../components/loader";
import { usePuntos } from "../services/hook/usePuntos";

export const PuntosPage = () => {

    const {
        puntoList,
        isLoading
    } = usePuntos()
    

    return(
        <div className="w-11/12 bg-opacity-25 bg-slate-100 min-h-screen rounded-md flex flex-col p-5 mx-auto my-2 flex-wrap gap-5 ">
            <h2 className="text-center text-5xl p-4 text-gray-800 border-b-2 mx-8 border-slate-800">Puntos</h2>
            <Link 
                to="/add-punto"
                className="bg-green-500 text-slate-50 w-fit py-2 px-4 rounded-md 
                    hover:bg-green-300 hover:text-slate-500 transition-colors
                    self-end
                    mr-10 text-xl
                "
            >
                Crear nuevo
            </Link>
           
           {!isLoading
                ?(puntoList
                    ? puntoList.map(p => <PuntoDetail {...p} key={p.id}/>)
                    : ""
                )
                :<Loader/>
           }
            
        </div>
    )

}