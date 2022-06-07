// 3rd party components
import React, { createContext,useEffect,useState } from 'react'
import { useSelector } from "react-redux";

// in app components

export const AuthContext = createContext();

export default function AuthContextProvider(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userError, setUserError] = useState(null);
    const  isUserLoggedIn  = useSelector(state => state.user.iuli);

    
    useEffect(() => {
        const fetchUser = async () =>{
            // const {status, error} = await isUser();
            if(isUserLoggedIn === "NSSB"){
                setIsAuthenticated(true);
            }else{
                setIsAuthenticated(false);
            }
            //setUserError(error);
        }
        fetchUser();
    }, [isUserLoggedIn])

    return (
        <AuthContext.Provider value={{isAuthenticated, userError, setIsAuthenticated,setUserError}}>
            {props.children}
        </AuthContext.Provider>
    )
}