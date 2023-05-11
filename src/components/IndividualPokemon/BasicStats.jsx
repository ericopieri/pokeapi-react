import React from "react";

import Fieldset from "./Fieldset";

function BasicStats({ stats }) {
    function capitalizaFirstLetter(text) {
        return text[0].toUpperCase() + text.slice(1);
    }

    function mapStats() {
        return stats.map(({ base_stat, stat }) => (
            <Fieldset
                key={stat.name}
                labelText={capitalizaFirstLetter(stat.name)}
                value={base_stat}
                name={stat.name}
            />
        ));
    }

    return <div className="content-tab">{mapStats()}</div>;
}

export default BasicStats;
