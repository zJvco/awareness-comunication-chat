import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/App.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthProvider } from './context/Auth'

function App() {
    return (
        <AuthProvider>
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
        </AuthProvider>
    );
}

export default App;