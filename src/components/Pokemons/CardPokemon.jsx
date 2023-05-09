import React, { useState, useEffect } from "react";

import PokemonImagem from "../../assets/img/pokemon.png";
import PikachuLoading from "../../assets/img/pikachu loading.gif";

import DropdownStats from "./DropdownStats";

import { BsFillEyeFill } from "react-icons/bs";

import axios from "axios";

function CardPokemon({ name, urlToFetch }) {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemonInfo, setPokemonInfo] = useState({});

    useEffect(() => {
        async function getPokemonByPropURL() {
            setIsLoading(true);

            try {
                const { data: pokemonDataFetch } = await axios.get(urlToFetch);

                setPokemonInfo(pokemonDataFetch);
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        }

        getPokemonByPropURL();
    }, [urlToFetch]);

    return (
        <div className="card-pokemon">
            {isLoading ? (
                <div className="loading-blackout">
                    <p>{name}</p>
                    <img src={PikachuLoading} alt="Loading" />
                    <p className="loading-pikachu">Loading...</p>
                </div>
            ) : (
                <>
                    <div
                        className={
                            pokemonInfo?.types
                                ? "box-img " + pokemonInfo.types[0].type.name
                                : "box-img"
                        }
                    >
                        <img
                            className="img-poke"
                            src={
                                pokemonInfo?.sprites &&
                                pokemonInfo.sprites.front_default
                            }
                            alt="Imagem Pokemon"
                        />
                    </div>
                    <div className="infos-pokemon">
                        <p className="tipo">
                            {pokemonInfo?.types &&
                                pokemonInfo.types
                                    .map(({ type }) => type.name)
                                    .join("/")
                                    .toUpperCase()}
                        </p>
                        <p className="nome-pokemon">{name.toUpperCase()}</p>
                    </div>
                    <div
                        className={
                            pokemonInfo?.types
                                ? "box-stats " + pokemonInfo.types[0].type.name
                                : "box-stats"
                        }
                    >
                        <div className="stats">
                            <h2 className="title-stat">View Stats</h2>
                            <BsFillEyeFill />
                            <DropdownStats
                                statsArray={
                                    pokemonInfo?.stats ? pokemonInfo.stats : []
                                }
                            />
                        </div>
                        <div className="hp">
                            <h2 className="title-stat">HP</h2>
                            <div className="hp-value">
                                {pokemonInfo?.stats &&
                                    pokemonInfo.stats[0].base_stat}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CardPokemon;
