import React from "react"
import { useNavigate } from "react-router-dom"

export const ButtonBack = (props) => {
    const navigate = useNavigate()
    
    return(
        <button onClick={()=> {
            navigate(`${props.url}`)
            
        }}
            className={`bg-red-600 w-fit py-2 px-4 text-lg  text-white ${props.custom} rounded-md
                hover:bg-red-500 transition-colors
            `} 
        >
            Volver
        </button>
    )
}