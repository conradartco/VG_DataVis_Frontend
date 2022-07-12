import React, { useState } from "react";
import "./YearSearchField.css";

const YearSearchField = (props) => {

    const [query, setQuery] = useState('');

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
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <input className="input-field" type='int' value={query} placeholder="...Enter Year..." onChange={(event) => setQuery(event.target.value)}/>
            </div>
            <div>
                <button className="search-button" type='submit'>Search</button>
            </div>
        </form>
    );
}

export default YearSearchField;