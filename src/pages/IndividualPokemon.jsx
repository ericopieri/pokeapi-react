import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FisicStats from "../components/IndividualPokemon/FisicStats";
import Abilities from "../components/IndividualPokemon/Abilities";
import BasicStats from "../components/IndividualPokemon/BasicStats";

import Loading from "../utils/utilsComponents/Loading";
import ErrorTitle from "../components/ErrorTitle";

import axios from "axios";

function IndividualPokemon() {
    const { name } = useParams();

    const [pokemonInfo, setPokemonInfo] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [activeContent, setActiveContent] = useState("fisicStats");

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

    function activeTabContent() {
        if (Object.keys(pokemonInfo).length > 0)
            switch (activeContent) {
                case "fisicStats":
                    return (
                        <FisicStats
                            name={pokemonInfo.name}
                            height={pokemonInfo.height}
                            weight={pokemonInfo.weight}
                            types={pokemonInfo.types}
                        />
                    );
                case "stats":
                    return <BasicStats stats={pokemonInfo.stats} />;
                case "abilities":
                    return <Abilities abilities={pokemonInfo.abilities} />;
                default:
                    return <div>Sem nada!</div>;
            }
    }

    return (
        <div className="individual-content">
            {isLoading ? (
                <Loading />
            ) : Object.keys(pokemonInfo).length > 0 ? (
                <>
                    <div
                        className={
                            pokemonInfo?.types
                                ? "box-img-poke " +
                                  pokemonInfo.types[0].type.name
                                : "box-img-poke"
                        }
                    >
                        <img
                            src={
                                pokemonInfo?.sprites &&
                                pokemonInfo.sprites.front_default
                            }
                            alt="Imagem Pokemon"
                        />
                    </div>
                    <div className="stats-individual">
                        <nav className="tabs-container">
                            <div
                                className={
                                    activeContent === "fisicStats"
                                        ? "tab-box active"
                                        : "tab-box"
                                }
                                onClick={() => setActiveContent("fisicStats")}
                            >
                                Informações Físicas
                            </div>
                            <div
                                className={
                                    activeContent === "stats"
                                        ? "tab-box active"
                                        : "tab-box"
                                }
                                onClick={() => setActiveContent("stats")}
                            >
                                Stats Básicas
                            </div>
                            <div
                                className={
                                    activeContent === "abilities"
                                        ? "tab-box active"
                                        : "tab-box"
                                }
                                onClick={() => setActiveContent("abilities")}
                            >
                                Habilidades
                            </div>
                        </nav>
                        {activeTabContent()}
                    </div>
                </>
            ) : (
                <ErrorTitle />
            )}
        </div>
    );
}

export default IndividualPokemon;
