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

export const getPuntosById = (id) => {
    return fetch(`${URL}/punto/${id}`)
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


export const getAllInstrucciones = () => {
    return fetch(`${URL}/instrucciones/`)
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


export const addNewPunto = (data) => {
    const {
        acuerdo,
        consejero,
        consejo,
        decision,
        description,
        punto
    }= data

    const newPunto = {
        consejos_puntos:Array.from(consejo.map(c => c.value)),
        id_consejero: Number(consejero),
        enunciate:description,
        type:punto,
        decision,
        accordance: acuerdo
    }
    console.log(newPunto)
    for (let i in newPunto) {
        console.log(newPunto[i],typeof newPunto[i])
    }

    return fetch(`${URL}/punto`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(newPunto)
    })
}
