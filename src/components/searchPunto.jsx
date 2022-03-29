
import React, { useState } from "react";
import { searchPuntosByWord } from "../services/consejo-service";
import { PuntoDetail } from "./PuntoDetails";
import { SearchInput } from "./searchInput";
import { Loader } from "./loader";

export const SearchPunto = () => {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsLoading(true)
        searchPuntosByWord(search)
            .then(res => {
                setSearchResults(res)
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
                    : "")
                : <Loader/>
                
            }
            {

            }
        </div>
    )
}