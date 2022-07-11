import VideoGameObjectCard from "./VideoGameObjectCard";

const VideoGameObjectDisplay = (props) => {

    return (
        <div>
            {props.videoGames.map((entry) => {
                return (
                    <VideoGameObjectCard key={entry.id} parentImport={entry}/>
                );
            })}
        </div>
    )
}

export default VideoGameObjectDisplay;