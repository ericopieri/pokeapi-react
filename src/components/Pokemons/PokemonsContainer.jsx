import React, { useState, useEffect } from "react";

import CardPokemon from "./CardPokemon";
import Loading from "../../utils/utilsComponents/Loading";

import axios from "axios";

function PokemonsContainer() {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function changePage(next = true) {
        try {
            const urlToFetchNewPage = next ? pokemons.next : pokemons.previous;

            setIsLoading(true);

            const { data: pokemonsList } = await axios.get(urlToFetchNewPage);

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
                    "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=24"
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
                        <CardPokemon name={name} urlToFetch={url} />
                    ))
                )}
            </div>
            <div className="buttons">
                <button
                    className={
                        pokemons?.previous ? "btn-n-p" : "btn-n-p disabled"
                    }
                    onClick={() =>
                        pokemons?.previous ? changePage(false) : null
                    }
                >
                    Previous
                </button>
                <button
                    className={pokemons?.next ? "btn-n-p" : "btn-n-p disabled"}
                    onClick={() => (pokemons?.next ? changePage() : null)}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default PokemonsContainer;
