import React, { useState } from "react";

const YearSearchField = (props) => {

    const [query, setQuery] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        if (query >= 1980 && query <= 2016){
            props.yearInput(query);
        }
        else {
            alert("Please enter a year between 1980 and 2016");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='int' value={query} placeholder="Enter Year..." onChange={(event) => setQuery(event.target.value)}/>
            </div>
            <div>
                <button type='submit'>Search</button>
            </div>
        </form>
    );
}

export default YearSearchField;