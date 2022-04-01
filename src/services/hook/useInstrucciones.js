import React,{useState,useEffect} from "react";
import { getAllInstrucciones } from "../consejo-service";

export const useInstrucciones = () =>{

    const [instrucciones, setIntrucciones] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        try {
            setIsLoading(true)
            const res = await getAllInstrucciones()
            const data = await res.json()

            if(!res.ok ) throw {status:res.status}
            console.log(data)
            setIntrucciones(data)
        } catch (err) {
            console.log(err)
        }
        finally{
            setIsLoading(false)
        }
        
    }, []);

    return {
        instrucciones,
        isLoading
    }
}