import React from "react";

import LoadingPokeball from "../../assets/img/loading-pokeball.gif";

function Loading() {
    return (
        <div className="loading-box">
            <img src={LoadingPokeball} alt="Loading Pokeball" />
            <p>Loading...</p>
        </div>
    );
}

export default Loading;
