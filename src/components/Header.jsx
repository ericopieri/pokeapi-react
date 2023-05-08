import React from "react";

import PokemonLogo from "../assets/img/logo.png";

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={PokemonLogo} alt="Logo" title="Logo Pokemon" />
            </div>
            <div className="header-fita fita-azul"></div>
            <div className="header-fita fita-amarela"></div>
        </header>
    );
}

export default Header;
