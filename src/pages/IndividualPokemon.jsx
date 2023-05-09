import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function IndividualPokemon() {
    const { name } = useParams();

    const [pokemonInfo, setPokemonInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getPokemonByPropName() {
            setIsLoading(true);

            try {
                const { data: pokemonData } = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${name}/`
                );

                setPokemonInfo(pokemonData);
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        }

        getPokemonByPropName();
    }, []);

    return <div>{name}</div>;
}

export default IndividualPokemon;
