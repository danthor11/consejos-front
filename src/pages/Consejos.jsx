import React , {useState,useEffect} from "react"
import { Loader } from "../components/loader";
import { getConsejos } from "../services/consejo-service";
import { Consejo } from "../components/Consejos";


export const Consejos = () => {
    const [consejosFromBD, setConsejosFromBD] = useState(null); 
    const [error, setError] = useState(null);

    useEffect(() => {
        getConsejos()
            .then(data => {
                if(!data.ok) throw {code:data.status, message: data.statusText||"Ocurrio un error"}
                return data.json()
            })
            .then(json =>{
                console.log(json)
                setConsejosFromBD(json)
                
            })
            .catch(err=>{
                setError(err)
                setTimeout(()=>{
                    setError(null)
                },3000)
            })
        
    }, []);

    return(
        <div className="w-11/12 bg-slate-300 min-h-screen rounded-md flex flex-col p-5 mx-auto my-2 flex-wrap gap-5 content-center">
            <h2 className="text-center text-5xl p-4 text-gray-800"> Consejos</h2>
            {!error
                ? (consejosFromBD
                    ? (consejosFromBD.map(consejo => <Consejo key={consejo.id} name={consejo.name} type={consejo.type} meet_date={consejo.meet_date}/>)) 
                    : <Loader/>
                )
                : ""
            }
            
        </div>
    )
}

