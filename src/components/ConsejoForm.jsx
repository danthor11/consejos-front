import React, { useState} from "react"
import { createConsejo } from "../services/consejo-service";
import { SuccessfullyMessage } from "./succesfullyMessage";
import {MessageError} from "./messageError"
import { ButtonBack } from "./buttonBack";


export const CreateNewConsejo = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState(null);
    const [error, setError] = useState(null);
    const [successfully, setSuccessfully] = useState(false);
   
    const handleSubmit = (e) =>{
        e.preventDefault()
        createConsejo({name,type,meet_date:date})
            .then(data => {
                if(!data.ok) throw {code:data.status, message: data.statusText||"Ocurrio un error"}
                return data.json()
            })
            .then(json =>{
                console.log(json)
                setSuccessfully(true)
                setTimeout(()=>{
                    setSuccessfully(false)
                },3000)
            })
            .catch(err=>{
                console.log(err)
                setError(err)
                setTimeout(()=>{
                    setError(null)
                },3000)
            })

    }

    return(
        <div className="flex min-h-screen  flex-col pt-6 px-4 sm:w-6/12 m-auto">
            <ButtonBack custom="self-end my-4" url="/consejos"/>

            <div className="bg-slate-100 rounded-lg shadow-lg ">
                <h2 className="
                    text-slate-800  
                    text-5xl 
                    text-center
                    py-4 
                    mx-4
                    font-semibold
                    border-b-slate-300
                    border-b-2
                    " 
                    >
                    Crear un consejo
                </h2>
                <form className="p-8 " onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name-consejo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Nombre del Consejo:
                        </label>
                        <input 
                            onChange={(e)=>{setName(e.target.value)}}
                            type="text" 
                            id="name-consejo"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Nombre del Consejo..."
                            value={name} 
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="type-consejo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Tipo de Consejo:
                        </label>
                        <select  
                            id="type-consejo"  
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            onChange={e=>setType(e.currentTarget.value)}
                            required
                        >
                            <option value="">Elegir una opcion</option>
                            <option value="Academico">Academico</option>
                            <option value="Universitario">Universitario</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="date-consejo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Fecha del Consejo
                        </label>
                        
                        <input 
                            onChange={(e)=>{setDate(e.target.value)}}
                            type="date" 
                            id="date-consejo" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                        />
                    </div>

                    {error 
                        ? <MessageError error={`Error ${error.code}`} message={error.error}/>
                        : ""
                    }
                    {successfully 
                        ? (<SuccessfullyMessage 
                            title={"¡El consejo ha sido creado satisfactoriamente!"} 
                            message={"El consejo ya esta guardado y agendado en el registro."}
                        />)
                        : ""
                    }

                    
                    <button type="submit" 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                        focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 
                        text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Crear Consejo
                    </button>
                </form>
            </div>
        </div>
        
    )
}