import React from "react"

export const Loader = () => {
    return(
        <div className="mx-auto p-4 flex items-center ">
            <div className="flex justify-center items-center mx-auto flex-col">
                <div className="spinner-border  animate-spin inline-block w-12 h-12 border-l-4 border-l-blue-400 border-4 rounded-full" role="status">
                    <span className="hidden">Loading...</span>
                </div>
                <h4 className="text-center text-3xl text-gray-700">Cargando...</h4>
            </div>
        </div>
    )
}