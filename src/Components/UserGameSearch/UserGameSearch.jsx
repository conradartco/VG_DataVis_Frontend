import SearchField from "../SearchField/SearchField";
import VideoGameObjectDisplay from "../VideoGameObjectDisplay/VideoGameObjectDisplay";


const UserGameSearch = (props) => {


    function searchFilter(query) {
        let newArray = []
        
    }

    return (
        <div>
            <div>
                <SearchField queryData={searchFilter}/>
            </div>
            <div>
                <VideoGameObjectDisplay />
            </div>
        </div>
    )
}

export default UserGameSearch;