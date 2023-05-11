import React, { useState, useEffect } from "react";

function PageButtons({ next, previous, changePage }) {
    const [page, setPage] = useState(1);

    useEffect(() => {
        changePage(page);
    }, [page]);

    return (
        <div className="buttons">
            <button
                className={previous ? "btn-n-p" : "btn-n-p disabled"}
                onClick={() => (previous ? setPage(1) : null)}
            >
                First Page
            </button>
            <button
                className={previous ? "btn-n-p" : "btn-n-p disabled"}
                onClick={() => (previous ? setPage(page - 1) : null)}
            >
                Previous
            </button>
            <span>{page}</span>
            <button
                className={next ? "btn-n-p" : "btn-n-p disabled"}
                onClick={() => (next ? setPage(page + 1) : null)}
            >
                Next
            </button>
            <button
                className={next ? "btn-n-p" : "btn-n-p disabled"}
                onClick={() => (next ? setPage(54) : null)}
            >
                Last Page
            </button>
        </div>
    );
}

export default PageButtons;
