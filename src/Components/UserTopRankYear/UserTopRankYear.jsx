import React, { useState } from 'react';
import TopGrossGames from "../TopGrossGames/TopGrossGames";
import YearSearchField from "../YearSearchField/YearSearchField";

const UserTopRankYear = ({videoGames}) => {

    const [userYear, setUserYear] = useState();


    function yearInput(year) {
        setUserYear(year);
        console.log('year in yearInput: ', year);
    }

    return (
        <div>
            <div>
                <YearSearchField videoGames={videoGames} yearInput={yearInput}/>
            </div>
            <div>
                <TopGrossGames videoGames={videoGames} yearInput={userYear}/>
            </div>
        </div>
    )
}

export default UserTopRankYear;