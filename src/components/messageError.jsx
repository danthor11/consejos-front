import React from "react"

export const MessageError = ({
    error="¡Upps!",
    message="Algo salio mal"
    }) =>{
    return(
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-4 rounded relative" role="alert">
            <strong className="font-bold">{error}:</strong>
            {" "}
            <div className="block sm:inline">{message}</div>
            
        </div>
    )
}