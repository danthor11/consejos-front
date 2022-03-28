import { URL } from "./login-services";

const typeConsejo ={
    "Universitario": "U",
    "Academico":"A"
}

export const createConsejo = (data) => {
    const {type} = data

    return fetch(`${URL}/consejo/`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            ...data,
            type: typeConsejo[type]
        })
    })
}

export const getConsejos = () => {
    return fetch(`${URL}/consejo/`)
}


export const getConsejoById = (id) =>{
    if(id===undefined) return Promise.reject({message:"'id' is empty"})
    return fetch(`${URL}/consejo/${id}`)
}


export const getPuntos = () => {
    return fetch(`${URL}/punto/`)
}

export const addInstruction = (data) =>{
    return fetch(`${URL}/instrucciones/`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
}


export const getAllUsers = () => {
    return fetch(`${URL}/user/`)
}


export const createConsejero = data => {
    console.log(data)
    return fetch(`${URL}/consejero/`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })
}


export const getConsejero = () => {
    return fetch(`${URL}/consejero/`)
}

export const searchPuntosByWord = async (word) => {
    const newWord = word.toLocaleLowerCase()
    try {
        const res = await getPuntos()
        const data = await res.json()

        if(!res.ok) throw {status:res.status,statusText:res.statusText}


        const filterResults = data.filter(punto => 
            (punto.enunciate.toLocaleLowerCase().includes(newWord) || punto.accordance.toLocaleLowerCase().includes(newWord)
        )) 
        return filterResults
    } catch (err) {
        console.log(err)
        return []
    }

}



export const getUserById = (id) => {
    return fetch(`${URL}/user/${id}`)
}