import { useState } from "react";
import VideoGameObjectConsoleSales from "./VideoGameObjectConsoleSales";
import './VideoGameObjectCard.css';

const VideoGameObjectCard = (props) => {

    const [show, setShow] = useState(false);

    const handleClick = event => {
        setShow(current => !current);
    }

    return (
        <div className="card-container">
            <h3>{props.parentImport.name}</h3>
            <div className="card-info">
                <button className="card-button" onClick={handleClick}>Show Details</button>
                {show && (
                    <div>
                        <p><strong>Platform:</strong> {props.parentImport.platform}</p>
                        <p><strong>Year:</strong> {props.parentImport.year}</p>
                        <p><strong>Genre:</strong> {props.parentImport.genre}</p>
                        <p><strong>Publisher:</strong> {props.parentImport.publisher}</p>
                        <p><strong>Global Sales:</strong> {props.parentImport.globalsales} million</p>
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