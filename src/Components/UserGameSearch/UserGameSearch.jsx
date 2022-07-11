import React, { useState } from 'react';
import SearchField from "../SearchField/SearchField";
import VideoGameObjectDisplay from "../VideoGameObjectDisplay/VideoGameObjectDisplay";


const UserGameSearch = (props) => {

    const [games, setGames] = useState([]);

    function searchFilter(query) {
        let newArray = []
        for (let i = 0; i < props.videoGames.length; i++) {
            if (props.videoGames[i].name.toLowerCase().includes(query)) {
                newArray.push(props.videoGames[i]);
            }
        }
        setGames(newArray);
    }

    return (
        <div>
            <div>
                <SearchField queryData={searchFilter}/>
            </div>
            <div>
                <VideoGameObjectDisplay videoGames={games} allGames={props.videoGames}/>
            </div>
        </div>
    )
}

export default UserGameSearch;