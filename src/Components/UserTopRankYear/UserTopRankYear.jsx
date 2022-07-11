import React, { useState } from 'react';
import TopGrossGames from "../TopGrossGames/TopGrossGames";
import YearSearchField from "../YearSearchField/YearSearchField";

const UserTopRankYear = ({videoGames}) => {

    const [userYear, setUserYear] = useState(2000);


    function yearInput(year) {
        setUserYear(year);
        // console.log('year in yearInput: ', year);
    }

    // console.log('userYear in UserTopRankYear: ', userYear);

    return (
        <div>
            <div>
                <YearSearchField videoGames={videoGames} yearInput={yearInput}/>
            </div>
            <div>
                {videoGames.length > 0 &&<TopGrossGames videoGames={videoGames} yearInput={userYear}/>}
            </div>
        </div>
    )
}

export default UserTopRankYear;