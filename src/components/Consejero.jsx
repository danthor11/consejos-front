import React, { useState , useEffect} from "react";
import Select from "react-select";
import { createConsejero, getAllUsers, getConsejos } from "../services/consejo-service";
import { MessageError } from "./messageError";
import { SuccessfullyMessage } from "./succesfullyMessage";

export const Consejero = () => {
    const [user, setUser] = useState("");
    const [consejo, setConsejo] = useState(null);
    const [ocupation, setOcupation] = useState("");
    const [allUsers, setAllUsers] = useState(null);
    const [allConsejos, setAllConsejos] = useState(null);
    const [successfully, setSuccessfully] = useState(false);

    useEffect(()=>{
        Promise.all([
            getConsejos(),
            getAllUsers()
        ])
            .then(data => {
                console.log(data)
                return Promise.all(data.map(d => d.json()))
            })
            .then(json => {
                
                const options = json[0].map(consejo => ({
                    label:`${consejo.name} - ${consejo.type} `, 
                    value: consejo.id
                }))
                

                setAllConsejos(options)
                setAllUsers(json[1])
            })
            .catch(err=>{
                console.log({err})
            })
    },[])


    const handleSubmit = (e)=>{
        e.preventDefault()

        const data = {
            user: Number(user),
            consejos_consejeros:returnValuesConsejos(consejo),
            position:ocupation
        }

        console.log(data)
        createConsejero(data)
            .then(data => {
                console.log(data)
                if(data.ok) throw {status:data.status, statusText: data.statusText || "Ocurrio un error"}
                return data.json()
            })
            .then(json => {
                setSuccessfully(true)
                setTimeout(()=>{
                    setSuccessfully(false)
                },5000)
            })
            .catch(err => {
                
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
            <div className="bg-slate-100 rounded-lg shadow-lg ">
                <h2
                    className="text-slate-200  
                        text-5xl 
                        text-center
                        py-4 
                        mx-4
                        font-semibold
                        shadow-sm
                        "
                >
                Crear un consejo
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

                        <Select
                            className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            options={allConsejos}
                            onChange={handleChange}
                            isMulti
                            value={consejo}
                        />

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


