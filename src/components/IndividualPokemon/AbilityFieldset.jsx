import React, { useEffect, useState } from "react";

import Fieldset from "./Fieldset";

import axios from "axios";

function AbilityFieldset({ url }) {
    const [abilityInfo, setAbilityInfo] = useState({});

    function capitalizaFirstLetter(text) {
        return text[0].toUpperCase() + text.slice(1);
    }

    function abilityFieldset() {
        if (Object.keys(abilityInfo).length > 0) {
            const abilityDescription = abilityInfo.flavor_text_entries.find(
                ({ language }) => language.name === "en"
            ).flavor_text;

            return (
                <Fieldset
                    labelText={capitalizaFirstLetter(abilityInfo.name)}
                    name={abilityInfo.name}
                    value={abilityDescription}
                />
            );
        }
    }

    useEffect(() => {
        async function getAbilityInfo() {
            const { data: abilityInfoResponse } = await axios.get(url);

            setAbilityInfo(abilityInfoResponse);
        }

        getAbilityInfo();
    }, []);

    return <div>{abilityFieldset()}</div>;
}

export default AbilityFieldset;
