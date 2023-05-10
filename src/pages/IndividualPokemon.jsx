import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FisicStats from "../components/IndividualPokemon/FisicStats";

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
                case "teste2":
                    return <div>teste2</div>;
                default:
                    return <div>Sem nada!</div>;
            }
    }

    return (
        <div className="individual-content">
            <div
                className={
                    pokemonInfo?.types
                        ? "box-img-poke " + pokemonInfo.types[0].type.name
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
                            activeContent === "teste2"
                                ? "tab-box active"
                                : "tab-box"
                        }
                        onClick={() => setActiveContent("teste2")}
                    >
                        teste2
                    </div>
                    <div
                        className={
                            activeContent === "teste3"
                                ? "tab-box active"
                                : "tab-box"
                        }
                        onClick={() => setActiveContent("teste3")}
                    >
                        teste2
                    </div>
                </nav>
                {activeTabContent()}
            </div>
        </div>
    );
}

export default IndividualPokemon;
