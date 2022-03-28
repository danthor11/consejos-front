
import React, { useState } from "react";
import { searchPuntosByWord } from "../services/consejo-service";
import { PuntoDetail } from "./PuntoDetails";
import { SearchInput } from "./searchInput";


export const SearchPunto = () => {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault()
        searchPuntosByWord(search)
            .then(res => setSearchResults(res))
    }

    return(
        <div className="min-h-screen flex flex-col mx-auto ">
            <h2 className="text-center text-3xl py-7 text-neutral-800 font-semibold">Ingrese el punto o acuerdo previo</h2>
            <form onSubmit={handleSubmit}>
                <SearchInput value={search} onChange={(e)=>setSearch(e.target.value)} />
            </form>

            {searchResults
                ?(
                    searchResults.map(el => <PuntoDetail key={el.name} {...el}/>)
                )
                : ""

            }
        </div>
    )
}