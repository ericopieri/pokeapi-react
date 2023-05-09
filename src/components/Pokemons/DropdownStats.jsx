import React from "react";

function DropdownStats({ statsArray }) {
    function mapStatsSpecs() {
        return statsArray.map(({ base_stat, stat }) => (
            <div className="stats-div">
                <span className="name-stat">
                    {stat.name[0].toUpperCase() + stat.name.slice(1)}
                </span>
                <span className="stat-value">{base_stat}</span>
            </div>
        ));
    }

    return <div className="dropdown-stats">{mapStatsSpecs()}</div>;
}

export default DropdownStats;
