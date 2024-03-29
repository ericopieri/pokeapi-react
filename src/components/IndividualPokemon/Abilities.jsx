import React, { useEffect } from "react";

import AbilityFieldset from "./AbilityFieldset";

function Abilities({ abilities }) {
    function mapAbilitiesFieldset() {
        return abilities.map(({ ability }) => (
            <AbilityFieldset url={ability.url} key={ability.name} />
        ));
    }

    return <div className="content-tab">{mapAbilitiesFieldset()}</div>;
}

export default Abilities;
