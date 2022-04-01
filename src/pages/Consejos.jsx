import React , {useState,useEffect} from "react"
import { Loader } from "../components/loader";
import { getConsejos } from "../services/consejo-service";
import { Consejo } from "../components/Consejos";
import { Link } from "react-router-dom";
import { useConsejo } from "../services/hook/useConsejos";

export const Consejos = () => {
    
    const {allConsejos,error} = useConsejo()

    return(
        <div className="w-11/12 bg-opacity-25 bg-slate-100 min-h-screen rounded-md flex flex-col p-5 mx-auto my-2 flex-wrap gap-5 ">
            <h2 className="text-center text-5xl p-4 text-gray-800 border-b-2  border-slate-800"> Consejos</h2>
            <Link 
                to="/create-consejo"
                className="bg-green-500 text-slate-50 w-fit py-2 px-4 rounded-md 
                    hover:bg-green-300 hover:text-slate-500 transition-colors
                    self-center 
                    
                "
            >
                Crear nuevo
            </Link>
            {!error
                ? (allConsejos
                    ? (allConsejos.map(consejo => <Consejo key={consejo.id} name={consejo.name} type={consejo.type} meet_date={consejo.meet_date}/>)) 
                    : <Loader/>
                )
                : ""
            }
            
        </div>
    )
}

