import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ConsejeroDetail } from "../components/consejeroDetail";
import { getConsejero } from "../services/consejo-service";

const Consejeros = () => {
    const [consejeros, setConsejeros] = useState(null);

    useEffect(() => {
        getConsejero()
            .then(res => res.json())
            .then(data => setConsejeros(data))
    }, []);

    return(
        <div className="min-h-screen mx-auto my-3">
            <div className="w-11/12 mx-auto my-2 bg-slate-50 bg-opacity-50  gap-5  p-8 flex flex-col rounded-md shadow-sm shadow-slate-600">
                <h2 className="text-center font-semibold text-5xl py-2 text-slate-800  ">Consejeros</h2>
                
                <Link 
                    to="/add-consejero"
                    className="bg-green-500 text-slate-50 w-fit py-2 px-4 rounded-md 
                        hover:bg-green-300 hover:text-slate-500 transition-colors
                        self-end mr-10
                    "
                >
                    Añadir
                </Link>
                
                {consejeros && (
                    consejeros.map(consejero => <ConsejeroDetail {...consejero} key={consejero.id}/>)
                )
                }
            </div>
        </div>
    )
}


export default Consejeros