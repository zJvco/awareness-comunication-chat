import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/App.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthContext } from './context/Auth'

import { checkIsAuthenticated } from "./utils/auth";

function App() {
    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        checkIsAuthenticated(localStorage.getItem("token_jwt"))
            .then(res => setIsAuth(res));
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Register />} />
                    </Routes>
                </main>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;