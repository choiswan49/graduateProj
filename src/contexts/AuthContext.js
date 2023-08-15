import { useContext,createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const login = user =>{
        setUser(user);
    }
    const logout = user =>{
        setUser(null)
        navigate('/login')
    }
    return(
        <AuthContext.Provider value={{user, setUser, login, logout}}>
            {children }
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}