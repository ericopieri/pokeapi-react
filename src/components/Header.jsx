import React from "react";
import { useNavigate } from "react-router-dom";

import PokemonLogo from "../assets/img/logo.png";

function Header() {
    const redirectTo = useNavigate();

    return (
        <header className="header">
            <div className="logo-container">
                <img
                    src={PokemonLogo}
                    alt="Logo"
                    title="Logo Pokemon"
                    onClick={() => redirectTo("/")}
                />
            </div>
            <div className="header-fita fita-azul"></div>
            <div className="header-fita fita-amarela"></div>
        </header>
    );
}

export default Header;
