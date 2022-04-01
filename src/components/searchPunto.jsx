
import React, { useState } from "react";
import { searchPuntosByWord } from "../services/consejo-service";
import { PuntoDetail } from "./PuntoDetails";
import { SearchInput } from "./searchInput";
import { Loader } from "./loader";

export const SearchPunto = () => {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [noResults, setNoResults] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setSearchResults(null)
        setIsLoading(true)
        searchPuntosByWord(search)
            .then(res => {
                if(res.length>0)
                    setSearchResults(res)
                else
                    setNoResults(true)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })   
    }

    return(
        <div className="min-h-screen flex flex-col mx-auto ">
            <h2 className="text-center text-3xl py-7 text-neutral-800 font-semibold">Ingrese el punto o acuerdo previo</h2>
            <form onSubmit={handleSubmit}>
                <SearchInput value={search} onChange={(e)=>setSearch(e.target.value)} />
            </form>

            {!isLoading
                ? (searchResults
                    ?(
                        searchResults.map(el => <PuntoDetail key={el.name} {...el}/>)
                    )
                    : noResults 
                        ? <NoResults/>
                        : ""
                )
                : <Loader/>
                
            }
            
        </div>
    )
}


const NoResults = () =>{

    return(
        <div className="flex flex-col p-6 content-start mx-auto bg-slate-50 gap-3  my-4 w-11/12 rounded-md text-slate-900">
            <h2 className="text-4xl my-2 text-center">Lo siento, no hay resultados</h2>
        </div>
    )
}
