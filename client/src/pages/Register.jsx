import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import ErrorMessage from "../components/ErrorMessage";

import '../styles/Form.css';

import { apiUrl } from '../constants/apiCredentials';

function Register() {
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": e.target.querySelector("#username").value,
                "email": e.target.querySelector("#email").value,
                "password": e.target.querySelector("#password").value,
                "confirm_password": e.target.querySelector("#confirm-password").value
            })
        }

        try {
            const res = await fetch(`${apiUrl}/cadastro`, config);
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error);
            }
            
            navigate("/login");
        }
        catch (error) {
            setErrorMsg(error.message);
        }

    }

    return (
        <div className="form-container">
            <div className="form-header">
                <h1>Cadastro</h1>
                <p>Já tem uma conta? Faça o <a href="/login">Login</a></p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="username">Usuário</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="input-field">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="input-field">
                    <label htmlFor="confirm-password">Confirmar Senha</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                </div>
                {errorMsg ? <ErrorMessage message={errorMsg} /> : null}
                <div className="submit-field">
                    <input type="submit" value="Cadastrar-se" />
                </div>
            </form>
        </div>
    );
}

export default Register;