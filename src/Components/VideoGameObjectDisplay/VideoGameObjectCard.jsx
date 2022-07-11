import { useState } from "react";
import VideoGameObjectConsoleSales from "./VideoGameObjectConsoleSales";

const VideoGameObjectCard = (props) => {

    const [show, setShow] = useState(false);

    const handleClick = event => {
        setShow(current => !current);
    }

    return (
        <div>
            <h3>{props.parentImport.name}</h3>
            <div>
                <button onClick={handleClick}>Show Details</button>
                {show && (
                    <div>
                        <p>Platform: {props.parentImport.platform}</p>
                        <p>Year: {props.parentImport.year}</p>
                        <p>Genre: {props.parentImport.genre}</p>
                        <p>Publisher: {props.parentImport.publisher}</p>
                        <p>Global Sales: {props.parentImport.globalsales} million</p>
                    </div>
                )}
            </div>
            <div>
                <VideoGameObjectConsoleSales parentImport={props.parentImport} allGames={props.allGames}/>
            </div>
        </div>
    )
}

export default VideoGameObjectCard;