import React,{useState,useEffect} from "react";
import { getConsejos , getAllUsers , getConsejero , getUserById } from "../consejo-service";


export const useConsejo = () => {
    const [allUsers, setAllUsers] = useState(null);
    const [allConsejosOptions, setAllConsejosOptions] = useState(null);
    const [allConsejos, setAllConsejos] = useState(null);
    const [error,setError] = useState(null)
    const [allConsejeros, setAllConsejeros] = useState(null);
    
    
    //GET Consejo + users
    useEffect(()=>{
        Promise.all([
            getConsejos(),
            getAllUsers()
        ])
            .then(data => {
                return Promise.all(data.map(d => d.json()))
            })
            .then(json => {
                
                const options = json[0].map(consejo => ({
                    label:`${consejo.name} - ${consejo.type} `, 
                    value: consejo.id
                }))
                
                setAllConsejosOptions(options)
                setAllUsers(json[1])
            })
            .catch(err=>{
                console.log({err})
            })
    },[])


    // GET consejos
    useEffect(() => {
        getConsejos()
            .then(data => {
                if(!data.ok) throw {code:data.status, message: data.statusText||"Ocurrio un error"}
                return data.json()
            })
            .then(json =>{
                setAllConsejos(json)  
            })
            .catch(err=>{
                setError(err)
                setTimeout(()=>{
                    setError(null)
                },3000)
            })
        
    }, []);
    

    useEffect( async () => {
        try {
            const [res1,res2] = await Promise.all([
                getConsejos(),
                getConsejero()
            ])

            const data = [await res1.clone().json(),await res2.clone().json()]
            if(!res1.ok && !res2.ok) throw {status:res.status}
            const options = data[0].map(consejo => ({
                label:`${consejo.name} - ${consejo.type} `, 
                value: consejo.id
            }))

            try {
                const resConsejos = await Promise.all(data[1].map(async consejero => await getUserById(consejero.user)))
                const dataConsejos = await Promise.all(resConsejos.map(el=> el.clone().json()))
                setAllConsejosOptions(options)
                setAllConsejeros(dataConsejos)
            } catch (err) {
                console.log({err})
            }

        } catch (err) {
            console.log({err})
        }
        
        return () =>{
            
        }
    },[])

   

    return{
        allUsers,
        allConsejosOptions,
        allConsejos,
        error,
        allConsejeros
    }
}