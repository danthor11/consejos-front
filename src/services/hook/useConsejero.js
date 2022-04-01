import React,{useState,useEffect} from "react";
import { getConsejero} from "../consejo-service";

export const useConsejero = () => {
    const [consejeros, setConsejeros] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getConsejero()
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                setConsejeros(data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, []);

    

    return{
        consejeros,
        isLoading
    }
}