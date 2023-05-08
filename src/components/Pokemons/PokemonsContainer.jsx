import React, { useState, useEffect } from "react";

import CardPokemon from "./CardPokemon";

import axios from "axios";

function PokemonsContainer() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => console.log(pokemons), [pokemons]);

    useEffect(() => {
        const getInitialPokemons = async () => {
            const { data: pokemonsList } = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/"
            );

            setPokemons(pokemonsList);
        };

        getInitialPokemons();
    }, []);

    return (
        <div className="pokemons-container">
            {pokemons &&
                pokemons.results?.length > 0 &&
                pokemons.results.map(({ name, url }) => (
                    <CardPokemon name={name} urlToFetch={url} />
                ))}
        </div>
    );
}

export default PokemonsContainer;
