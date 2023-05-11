import React, { useState, useEffect } from "react";

import CardPokemon from "./CardPokemon";
import PageButtons from "./PageButtons";
import Loading from "../../utils/utilsComponents/Loading";

import axios from "axios";

function PokemonsContainer() {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function changePage(page) {
        try {
            setIsLoading(true);

            const offset = (page - 1) * 24;
            const { data: pokemonsList } = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=24`
            );

            setPokemons(pokemonsList);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const getInitialPokemons = async () => {
            try {
                setIsLoading(true);

                const { data: pokemonsList } = await axios.get(
                    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24"
                );

                setPokemons(pokemonsList);
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        };

        getInitialPokemons();
    }, []);

    return (
        <>
            <div className="pokemons-container">
                {isLoading ? (
                    <Loading />
                ) : (
                    pokemons &&
                    pokemons.results?.length > 0 &&
                    pokemons.results.map(({ name, url }) => (
                        <CardPokemon name={name} urlToFetch={url} key={name} />
                    ))
                )}
            </div>
            <PageButtons
                next={pokemons.next}
                previous={pokemons.previous}
                changePage={changePage}
            />
        </>
    );
}

export default PokemonsContainer;
