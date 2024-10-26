import React,{createContext,useContext,useState} from "react";

export const Context = createContext();

export default function Provider ({children}){

    const [adm,setAdm] = useState(false)


    return(
        <Context.Provider value={{adm,setAdm}}>
            {children}        
        </Context.Provider>
    )
}