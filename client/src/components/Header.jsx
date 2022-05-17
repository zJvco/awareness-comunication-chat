import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/Header.css'

import { AuthContext } from "../context/Auth";

function Header() {
    const { user, authenticated, handleLogout } = useContext(AuthContext);

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
                            !authenticated ? (
                                <a href="/login">
                                    <FontAwesomeIcon icon="fa-solid fa-user" />
                                </a>
                            ) : (
                                <a href="/#" onClick={handleLogout}>
                                    <FontAwesomeIcon icon="fas fa-sign-out" />
                                </a>
                            )
                        }
                    </li>
                </ul>
            </nav>
            {
                authenticated ? <span className="userInfo">Olá, <span>{ user ? user.username : "" }</span></span> : null
            }
        </header>
    );
}

export default Header;