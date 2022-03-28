
import React, { useEffect, useState } from "react"
import { getConsejoById } from "../services/consejo-service";

export const PuntoDetail = (props) => {
    const [consejo, setConsejo] = useState(null);
    
    useEffect(() => {
        Promise.all(
            props.consejos_puntos.map(id => getConsejoById(id).then(res => res.json()))
        )
            .then(res => setConsejo(res))       
    }, []);

    return (
        <div className="flex flex-col p-10 content-start bg-slate-100 gap-3 mx-auto my-4 w-4/5 rounded-md text-slate-900">

            <h2 className="text-4xl my-2 text-center">{props.enunciate}</h2>
            {consejo 
                ? consejo.map(c => <div className="flex flex-col py-4 border-solid  border-y-2 border-slate-800">
                    <p>Perteniente al consejo : <span className="text-2xl">{c.name}</span></p>
                    
                    <p><span className="italic text-xs">{c.meet_date}</span></p>
                </div>)
                : ""
            }
            
            <p>Tipo: {props.type==="D" ? "Decisión" :"Información" }</p>
            <p>Decision: {props.decision==="R" ? <Rechazada/> : <Diferida/> }</p>

            <div>
                <h4>Acuerdo:</h4>
                <p>{props.accordance}</p>
            </div>
        </div>

    )
}

const Rechazada = () => {
    return (
        <span className="text-red-500 text-lg">Rechazada</span>
    )
}

const Diferida = () => {
    return (
        <span className="text-green-400 text-lg">Diferida</span>
    )
}