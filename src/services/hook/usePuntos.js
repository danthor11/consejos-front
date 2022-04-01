import React, {useState, useEffect} from "react";
import { getPuntos ,getPuntosById} from "../consejo-service";

export const usePuntos = (props) => {
    
    const [puntoList, setPuntoList] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [punto, setPunto] = useState(null);
   

    useEffect(async() => {
        try {
            setIsLoading(true)
            const res = await getPuntos()
            const data = await res.json()
            
            if(!res.ok) throw {err:res.statusText}
            setPuntoList(data)
        } catch (err) {
            console.log(err)
        }
        finally{
            setIsLoading(false)
        }

    }, []);

    
    useEffect(async () => {
        if(props?.id_punto){

            try {  
                const res = await getPuntosById(props.id_punto)
                const data = await res.json()
                if(!res.ok) throw{status: res.status}
                console.log(data)
                setPunto(data)
            } catch (err) {
                console.log(err)
            }
        }
        
    }, []);

    return{
        puntoList,
        isLoading,
        punto
        
    }
}