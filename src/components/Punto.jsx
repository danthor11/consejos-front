import React , {useState,useEffect} from "react"
import Select from "react-select"
import { getAllUsers, getConsejero, getConsejos } from "../services/consejo-service"

const req=[
    getConsejos(),
    getConsejero(),
    getAllUsers()
]

export const Punto = () =>{

    const [allConsejos, setAllConsejos] = useState(null);
    const [allConsejeros, setAllConsejeros] = useState(null);
    
    useEffect(()=>{
        Promise.all(req)
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
            setAllConsejeros(json[1])
        })
        .catch(err=>{
            console.log({err})
        })

    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    console.log(allConsejeros,allConsejos)
    return(
        <div className="flex  flex-col pt-6 px-4 sm:w-6/12 m-auto min-h-screen h-auto">
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
                Añadir punto
                </h2>
                <form className="p-8 " onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="user"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Consejo
                        </label>

                        { allConsejos
                            ?   <Select
                                    options={allConsejos}
                                />
                            : ""
                        }
                        

                       
                            {/* "bg-gray-50 border 
                            border-gray-300 
                            text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                            " */}
                            
                           
                    
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="consejo"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Consejero:
                        </label>
                        <select
                            id="consejo"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            
                            required
                        >
                            {allConsejeros 
                            ?  (
                                allConsejeros.map(c => <option value={c.id} key={c.id}>{c.name}</option>)
                            )
                            : <option value="">Cargando option</option>

                            }
                           
                        </select>
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="descripcion"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Descripcion
                        </label>

                        <input
                            
                            type="text"
                            id="descripcion"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            
                        />
                    </div>

                    

                    <div className="mb-6">
                        <label htmlFor="type-punto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Tipo de Punto
                        </label>
                        <select  
                            id="type-punto"  
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                            
                        >
                            <option value="">Elegir una opcion</option>
                            <option value="D">Decision</option>
                            <option value="I">Informacion</option>
                        </select>
                    </div>


                    <div className="mb-6">
                        <label htmlFor="decision" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Decision
                        </label>
                        <select  
                            id="decision"  
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                            
                        >
                            <option value="">Elegir una opcion</option>
                            <option value="D">Diferido</option>
                            <option value="R">Rechazado</option>
                        </select>
                    </div>
                    

                    <div className="mb-6">
                        <label htmlFor="acuerdo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Acuerdo
                        </label>
                        <textarea
                            className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                mb-5
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="acuerdo"
                            rows="3"
                            placeholder="Acuerdo..."
                            
            
                            required
                            maxLength={100}
                        />
                    </div>


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
    )
}