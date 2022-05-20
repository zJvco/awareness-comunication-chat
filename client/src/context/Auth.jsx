import { createContext, useEffect, useState } from "react";

import { apiUrl } from "../constants/apiCredentials";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token_jwt");
        
        if (token) {
            validateToken(token);
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    const validateToken = async (token) => {
        const config = {
            method: "GET",
            headers: {
                "x-access-token": token
            }
        }
    
        try {
            const res = await fetch(`${apiUrl}/auth`, config);
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error);
            }

            setUser(data);
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token_jwt");

        setAuthenticated(false);
    }

    if (loading) {
        return;
    }

    return (
        <AuthContext.Provider value={{ user, setUser, authenticated, setAuthenticated, handleLogout }}>
            { children }
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };