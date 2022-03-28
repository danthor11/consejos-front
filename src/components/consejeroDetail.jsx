import React, { useEffect, useState } from "react";
import { getConsejoById } from "../services/consejo-service";
import { Consejo } from "./Consejos";
import { UserDetail } from "./userDetail";

export const ConsejeroDetail = (props) =>{
    console.log(props,"consejero")
    const [consejos, setConsejos] = useState(null);

    useEffect(() => {
        if(props.consejos_consejeros.length >0){
            Promise.all(props.consejos_consejeros.map(id => getConsejoById(id).then(res => res.json())))
                .then(data => setConsejos(data))
        }
    }, []);
    return(
        <div className="bg-slate-50   rounded-md border-2 border-zinc-700 shadow-slate-700 
            hover:shadow-cyan-300 hover:shadow-md transition-shadow
        ">
            <UserDetail userId={props.user}/>
            <div className="px-4 py-2">
                <h4 className="text-2xl mb-4">Consejo(s) Asociado(s):</h4>
                {consejos && (
                    consejos.map(c => <Consejo {...c} key={c.id}/>)
                )
                }
            </div>
        </div>
    )
}