import React, { useEffect, useState } from "react";

import Fieldset from "./Fieldset";

// Import's dos Icons de tipo de Pokemon...

import electric from "../../assets/icons_pokemon/electric.svg";
import bug from "../../assets/icons_pokemon/bug.svg";
import dark from "../../assets/icons_pokemon/dark.svg";
import dragon from "../../assets/icons_pokemon/dragon.svg";
import fairy from "../../assets/icons_pokemon/fairy.svg";
import fighting from "../../assets/icons_pokemon/fighting.svg";
import fire from "../../assets/icons_pokemon/fire.svg";
import flying from "../../assets/icons_pokemon/flying.svg";
import ghost from "../../assets/icons_pokemon/ghost.svg";
import grass from "../../assets/icons_pokemon/grass.svg";
import ground from "../../assets/icons_pokemon/ground.svg";
import ice from "../../assets/icons_pokemon/ice.svg";
import normal from "../../assets/icons_pokemon/normal.svg";
import poison from "../../assets/icons_pokemon/poison.svg";
import psychic from "../../assets/icons_pokemon/psychic.svg";
import rock from "../../assets/icons_pokemon/rock.svg";
import steel from "../../assets/icons_pokemon/steel.svg";
import water from "../../assets/icons_pokemon/water.svg";

const pokemonTypesIcons = {
    electric,
    bug,
    dark,
    dragon,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    ice,
    normal,
    poison,
    psychic,
    rock,
    steel,
    water,
};

function FisicStats({ name, height, weight, types }) {
    function mapTypes() {
        return types.map(({ type }) => (
            <div className={"type-box " + type.name}>
                <img src={pokemonTypesIcons[type.name]} alt="Nome do Tipo" />
                <span>{capitalizaFirstLetter(type.name)}</span>
            </div>
        ));
    }

    function capitalizaFirstLetter(text) {
        return text[0].toUpperCase() + text.slice(1);
    }

    function convertFeetToCentimeters() {
        const valueInMeters = height * 30.48;

        return String(valueInMeters.toFixed(2));
    }

    return (
        <div className="content-tab">
            <Fieldset
                name="name"
                labelText="Name"
                value={capitalizaFirstLetter(name)}
            />
            <fieldset className="inline-inputs">
                <Fieldset
                    name="height"
                    labelText="Height"
                    value={convertFeetToCentimeters() + "cm"}
                />
                <Fieldset
                    name="weight"
                    labelText="Weight"
                    value={weight + "kg"}
                />
            </fieldset>
            <section className="tipos-container">{mapTypes()}</section>
        </div>
    );
}

export default FisicStats;
