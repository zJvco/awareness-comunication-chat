import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/Header.css'

import { AuthContext } from "../context/Auth";

import { logout } from "../utils/auth";

function Header() {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const handleLogoutClick = (e) => {
        e.preventDefault();

        logout();

        setIsAuth(false);
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            <FontAwesomeIcon icon="fas fa-home" />
                        </a>
                    </li>
                    <li>
                        <a href="/chat">
                            <FontAwesomeIcon icon="fas fa-comments" />
                        </a>
                    </li>
                    <li>
                        {
                            !isAuth ? (
                                <a href="/login">
                                    <FontAwesomeIcon icon="fa-solid fa-user" />
                                </a>
                            ) : (
                                <a href="/#" onClick={handleLogoutClick}>
                                    <FontAwesomeIcon icon="fas fa-sign-out" />
                                </a>
                            )
                        }
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;