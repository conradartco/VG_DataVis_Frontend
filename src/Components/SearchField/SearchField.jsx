import React, { useState } from "react";

const SearchField = (props) => {

    const [query, setQuery] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        let newQuery = query.toLocaleLowerCase();
        console.log('newQuery in SearchField: ', newQuery);
        props.queryData(newQuery);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='int' value={query} placeholder="Search..." onChange={(event) => setQuery(event.target.value)}/>
            </div>
            <div>
                <button type='submit'>Find Game</button>
            </div>
        </form>
    );
}

export default SearchField;