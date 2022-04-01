import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ConsejeroDetail } from "../components/consejeroDetail";
import { getConsejero } from "../services/consejo-service";
import { Loader } from "../components/loader";
import { useConsejero } from "../services/hook/useConsejero";

const Consejeros = () => {
   
    const {isLoading,consejeros} = useConsejero()
  
    return(
        <div className="min-h-screen mx-auto my-3">
            <div className="w-11/12 mx-auto my-2 bg-slate-50 bg-opacity-50  gap-5  p-8 flex flex-col rounded-md shadow-sm shadow-slate-600">
                <h2 className="text-center font-semibold text-5xl py-2 text-slate-800  ">Consejeros</h2>
                
                <Link 
                    to="/add-consejero"
                    className="bg-green-500 text-slate-50 w-fit py-2 px-4 rounded-md 
                        hover:bg-green-300 hover:text-slate-500 transition-colors
                        self-center text-2xl
                        mb-4
                    "
                >
                    Añadir
                </Link>
                
                {!isLoading
                    ? consejeros ? (
                        consejeros.map(consejero => <ConsejeroDetail {...consejero} key={consejero.id}/>))
                        :""
                    : <Loader/>
                }
                
            </div>
        </div>
    )
}


export default Consejeros