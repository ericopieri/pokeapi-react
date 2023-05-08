import React from "react";

import TitlePage from "../components/TitlePage";
import PokemonsContainer from "../components/Pokemons/PokemonsContainer";

function Pokemons() {
    return (
        <div>
            <TitlePage text="Lista de Pokemons" />
            <PokemonsContainer />
        </div>
    );
}

export default Pokemons;
