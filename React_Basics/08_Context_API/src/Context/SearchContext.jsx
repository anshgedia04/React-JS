import { createContext, useState } from "react";

export const SearchContext  = createContext() ; 

const SearchProvider = ({children}) =>  {
    let  [Search_counter , setCounter] = useState(0) ;

    const new_Search = () => {
    setCounter(Search_counter += 1 )    ; 
    }
    return (
        <SearchContext.Provider value={{Search_counter , new_Search}} >
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider ;