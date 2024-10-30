import React,{createContext,useContext,useState} from "react";

export const Context = createContext();

export default function Provider ({children}){

    const [adm,setAdm] = useState(false)
    const [urlApi,setUrlApi] = useState("")


    return(
        <Context.Provider value={{adm,setAdm,setUrlApi,urlApi}}>
            {children}        
        </Context.Provider>
    )
}