import VideoGameObjectCard from "./VideoGameObjectCard";

const VideoGameObjectDisplay = (props) => {

    return (
        <div>
            {props.videoGames.map((entry) => {
                return (
                    <VideoGameObjectCard key={entry.id} parentImport={entry} allGames={props.allGames}/>
                );
            })}
        </div>
    )
}

export default VideoGameObjectDisplay;