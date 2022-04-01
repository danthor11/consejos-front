
import react , {useState}from "react";
import { addInstruction} from "../services/consejo-service";
import {SuccessfullyMessage} from "./succesfullyMessage"
import {MessageError} from "./messageError"
import { ButtonBack } from "./buttonBack";
import { useForm } from "../services/hook/useForm";
import { usePuntos } from "../services/hook/usePuntos";

export const AddInstruccion = () => {

   
    const {
        instruccion,setInstruccion,
        puntoSeleccionado,setPuntoSeleccionado
    } = useForm()
    const {puntoList} = usePuntos()

    const [error, setError] = useState(null);
    const [successfully, setSuccessfully] = useState(false);
    



    const handleSubmit = (e) => {
        e.preventDefault()
        addInstruction({id_punto:puntoSeleccionado,instruction:instruccion})
            .then(data => {
                console.log(data)
                if(!data.ok) throw {status:data.status, statusText: data.statusText || "Ocurrio un error"}
                return data.json()
            })
            .then(json =>{
                setSuccessfully(true)
                setTimeout(()=>{
                    setSuccessfully(false)
                },5000)
            })
            .catch(err=>{
                console.log(err)
                setError(err)
                setTimeout(()=>{
                   setError(null)
                },3000)
            })

        console.log({id_punto:puntoSeleccionado,instruction:instruccion})

        setPuntoSeleccionado(""),
        setInstruccion("")
    }

    return(
        <div className="min-h-screen w-4/5 mx-auto flex flex-col">
                <h2 className="
                    text-slate-200  
                    text-5xl 
                    text-center
                    py-4 
                    mx-4
                    font-semibold
                    shadow-sm
                    " 
                >
                    Añadir 
                </h2>

                <ButtonBack url={"/instrucciones"} custom={"my-2 self-end"}/>

                <form className="p-8 bg-white bg-opacity-50 rounded-md" onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="punto" className="block my-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Punto a tratar:
                        </label>
                        <select  
                            id="punto"  
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            required
                            onChange={(e)=>setPuntoSeleccionado(e.target.value)}
                            value={puntoSeleccionado}
                        >
                            <option value="">Elegir una opcion</option>
                            {puntoList
                                ?(puntoList.map(p => <Option key={p.id} value={p.id} >{p.enunciate}</Option>))
                                : ""
                            }
                        </select>
                    </div>

                    <div >
                        <label htmlFor="intruccion" className="block my-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Instruccion:
                        </label>
                    </div>

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
                            id="intruccion"
                            rows="3"
                            placeholder="Intruccion..."
                            onChange={(e)=>setInstruccion(e.target.value)}
                            value={instruccion}
                            required
                            maxLength={100}
                        />
                       
                    
                    {error 
                        ? <MessageError error={`Error ${error.status}`} message={error.statusText}/>
                        : ""
                    }
                    {successfully 
                        ? (<SuccessfullyMessage 
                            title={"¡La instruccion se ha creado satisfactoriamente!"} 
                            message={"La instruccion ya esta guardada en el registro."}
                        />)
                        : ""
                    } 

                    
                    <button type="submit" 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                        focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 
                        text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Añadir
                    </button>
                </form>
    
        </div>
    )
}


const Option = (props) => {
    return(
        <option value={props.value}>
            {props.children}
        </option>
    )
}