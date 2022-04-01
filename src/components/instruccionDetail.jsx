
import React, { useEffect, useState } from "react"
import { getPuntosById } from "../services/consejo-service";
import {usePuntos} from "../services/hook/usePuntos"
import { PuntoDetail} from "./PuntoDetails";


export const IntruccionesDetail = (props) => {
    const { punto } = usePuntos(props)
    

    
    return (
        <div className="flex flex-col  content-center bg-slate-50  mx-auto w-4/5 rounded-md text-slate-900">

            <div className="flex flex-col items-start pl-10 py-8 bor">
                <h4 className="text-2xl text-slate-900">Instruccion:</h4>
                <h4 className="text-lg text-slate-800 font-medium">{props.instruction}</h4>
            </div>
            <hr className="text-stone-600"/>
            {punto
                ? <PuntoDetail {...punto}/>
                :   "no"

            }
        </div>

    )
}
