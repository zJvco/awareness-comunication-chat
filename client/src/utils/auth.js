import { apiUrl } from '../constants/apiCredentials';

export async function checkIsAuthenticated(token) {
    const config = {
        method: "GET",
        headers: {
            "x-access-token": token
        }
    }

    try {
        const res = await fetch(`${apiUrl}/auth`, config);
        
        if (res.ok) {
            return true;
        }

        return false;
    }
    catch (error) {
        console.log("Algo deu errado")
    }
}

export function logout() {
    localStorage.removeItem("token_jwt");
    
    window.location.reload();
}