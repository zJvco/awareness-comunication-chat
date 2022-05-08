import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/Header.css'

function Header() {
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
                        <a href="/login">
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;