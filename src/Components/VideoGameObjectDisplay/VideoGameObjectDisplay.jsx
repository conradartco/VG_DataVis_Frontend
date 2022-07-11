

const VideoGameObjectDisplay = (props) => {

    return (
        <div>
            {props.videoGames.map((entry) => {
                return (
                    <div key={entry.id}>
                        <p>Name: {entry.name}</p>
                        <p>Platform: {entry.platform}</p>
                        <p>Year: {entry.year}</p>
                        <p>Genre: {entry.genre}</p>
                        <p>Publisher: {entry.publisher}</p>
                        <p>Global Sales: {entry.globalsales} million</p>
                        <hr></hr>
                    </div>
                );
            })}
        </div>
    )
}

export default VideoGameObjectDisplay;