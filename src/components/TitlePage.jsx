import React from "react";

function TitlePage({ text, customClass }) {
    return (
        <h1
            className={
                customClass !== undefined
                    ? "title-page " + customClass
                    : "title-page"
            }
        >
            {text}
        </h1>
    );
}

export default TitlePage;
