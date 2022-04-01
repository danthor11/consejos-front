import React, { useState } from "react";
import Select from "react-select";
import { createConsejero } from "../services/consejo-service";
import { ButtonBack } from "./buttonBack";
import { MessageError } from "./messageError";
import { SuccessfullyMessage } from "./succesfullyMessage";
import { useConsejo } from "../services/hook/useConsejos";
import { useForm } from "../services/hook/useForm";


export const Consejero = () => {
  
    const {
        user, setUser,
        consejo, setConsejo,
        ocupation,setOcupation
    } = useForm()
    const {allUsers,allConsejosOptions} = useConsejo()
    
    const [successfully, setSuccessfully] = useState(false);
    const [error, setError] = useState(null);


    

    const handleSubmit = (e)=>{
        e.preventDefault()

        const data = {
            user: Number(user),
            consejos_consejeros:returnValuesConsejos(consejo),
            position:ocupation
        }

        createConsejero(data)
            .then(data => {
                console.log(data)
                if(!data.ok) throw {status:data.status, statusText: data.statusText || "Ocurrio un error"}
                setSuccessfully(true)
                setTimeout(()=>{
                    setSuccessfully(false)
                },5000)
                return data.json()
            })  
            .catch(err => {
                setError(error)
                setTimeout(()=>{
                    setError(null)
                },5000)
            })

        setConsejo(null)
        setOcupation("")
        setUser("")
    }

    const returnValuesConsejos = (array) => array.map(el => el.value)

    const handleChange = (value) =>{
        setConsejo(value)
        console.log(value)
    }

    return (
        <div className="flex h-96 flex-col pt-6 px-4 sm:w-6/12 m-auto min-h-screen">
            <ButtonBack custom={"my-4 self-end"} url="/consejero"/>
            <div className="bg-slate-100 rounded-lg shadow-lg ">
                <h2
                    className="text-slate-800  
                        text-5xl 
                        text-center
                        py-4 
                        mx-4
                        font-semibold
                        shadow-sm
                        "
                >
                    Añadir Consejero
                </h2>
                <form className="p-8 " onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="user"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Usuario
                        </label>
                        <select
                            id="consejo"
                            className="bg-gray-50 border 
                            border-gray-300 
                            text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                            "
                            value={user}
                            onChange={(e) => setUser(e.currentTarget.value)}
                            required
                            
                        >
                            {allUsers
                                ? ( 
                                    <>
                                        <option value="">Elige un usuario</option>
                                        {
                                            allUsers.map(user => (
                                                <option value={user.id} key={user.id}>{user.user_name} - {user.email}</option>
                                            ))
                                        }
                                    </>
                                )
                                : <option>Buscando...</option>
                            }
                        </select>
                    
                    </div>
                    
                    <div className="mb-6">
                        <label
                            htmlFor="consejo"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Consejo:
                        </label>


                        {allConsejosOptions
                            ? <Select
                                    className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    options={allConsejosOptions}
                                    onChange={handleChange}
                                    isMulti
                                    value={consejo}
                                    placeholder="Elija un consejo"
                                />
                            : ""
                        }
                        

                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="ocupation"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Ocupacion:
                        </label>
                        <input
                            onChange={(e) => {
                                setOcupation(e.target.value);
                            }}
                            type="text"
                            id="ocupation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            value={ocupation}
                        />
                    </div>


                    {error 
                        ? <MessageError error={`Error al crear elemento`} message={"intente mas tarde."}/>
                        : ""
                    }
                    {successfully
                        ? <SuccessfullyMessage  
                            title={"¡El consejero se ha creado satisfactoriamente!"} 
                            message={"El consejero ya esta guardado en el registro."}
                        />
                        : ""
                    }

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                        focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 
                        text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Crear Consejero
                    </button>
                </form>
            </div>
        </div>
    );
};


