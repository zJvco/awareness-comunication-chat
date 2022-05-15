import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ErrorMessage from '../components/ErrorMessage';

import { apiUrl } from '../constants/apiCredentials';
import { checkIsAuthenticated } from '../utils/auth';

import '../styles/Form.css';

import { AuthContext } from "../context/Auth";

function Login() {
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState();

    const { setIsAuth } = useContext(AuthContext);

    useEffect(() => {
        checkIsAuthenticated(localStorage.getItem("token_jwt"))
            .then(authenticated => {
                if (authenticated) {
                    navigate("/");
                }
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": e.target.querySelector("#email").value,
                "password": e.target.querySelector("#password").value
            })
        }

        try {
            const res = await fetch(`${apiUrl}/login`, config);
            const token = await res.text();

            if (!res.ok) {
                throw new Error(token);
            }
            else {
                localStorage.setItem("token_jwt", token);
    
                setIsAuth(true);

                navigate("/");
            }
        }
        catch (error) {
            setErrorMsg(error.message);
        }
    }

    return (
        <div className="form-container">
            <div className="form-header">
                <h1>Login</h1>
                <p>Ainda não tem uma conta? <a href="/cadastro">Cadastrar-se</a></p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                </div>
                {errorMsg ? <ErrorMessage message={errorMsg} /> : null}
                <div className="submit-field">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
}

export default Login;