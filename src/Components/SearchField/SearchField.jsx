import React, { useState } from "react";
import "./SearchField.css";

const SearchField = (props) => {

    const [query, setQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newQuery = query.toLowerCase();
        // console.log('newQuery in SearchField: ', newQuery);
        props.queryData(newQuery);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <input className="input-field" type='str' value={query} placeholder="...Search..." onChange={(event) => setQuery(event.target.value)}/>
            </div>
            <div>
                <button className="search-button" type='submit'>FIND GAME</button>
            </div>
        </form>
    );
}

export default SearchField;