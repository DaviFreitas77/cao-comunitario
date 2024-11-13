import React,{createContext,useContext,useState} from "react";

export const Context = createContext();

export default function Provider ({children}){

    const [adm,setAdm] = useState(false)
    const [urlApi,setUrlApi] = useState("")
    const [nomeUser,setNomeUser] = useState("")
    const [emailUser,setEmailUser] = useState("")
    const [numeroUser,setNumeroUser] = useState("")
    const [imagemUser,setImagemUser] = useState("")
    const [idUser,setIdUser] = useState("")


    return(
        <Context.Provider value={{adm,setAdm,setUrlApi,urlApi,nomeUser,setNomeUser,emailUser,setEmailUser,setNumeroUser,numeroUser,setImagemUser,imagemUser,setIdUser,idUser}}>
            {children}        
        </Context.Provider>
    )
}