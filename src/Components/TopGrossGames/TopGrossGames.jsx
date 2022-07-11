import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

// To-Do //
// Create an input field that will accept user requested year // or drop-down menu with available years
// Get the selected year in database and pull all games from that year
// Filter games from selected year by globalsales
// Map globalsales games by top 3 earners
// Display top 3 earners to user as a data visualization

const TopGrossGames = (props) => {

    const [rerender, setRerender] = useState(false)

    useEffect(() => {
       setRerender(!rerender)
    }, [props.yearInput])
   
    let filteredGames = props.videoGames.filter(game => game.year === parseInt(props.yearInput));
    // console.log('props.videoGames in TopGrossGames: ', props.videoGames);
    // console.log('props.yearInput in TopGrossGames: ', props.yearInput);
    // console.log('filteredGames in TopGrossGames: ', filteredGames);

    let gamesGlobalSales = filteredGames.map(game => game.globalsales);
    // console.log('gamesGlobalSales in TopGrossGames: ', gamesGlobalSales);

    let gamesGlobalSalesSorted = gamesGlobalSales.sort((a, b) => b - a);
    // console.log('gamesGlobalSalesSorted in TopGrossGames: ', gamesGlobalSalesSorted);

    const topGrossArray = []
    for (let i = 0; (i <3 && i < gamesGlobalSalesSorted.length); i++) {
        topGrossArray.push(gamesGlobalSalesSorted[i]);
    }
    // console.log('topGrossArray in TopGrossGames: ', topGrossArray);

    let foundGame = [];
    for (let i = 0; i < topGrossArray.length; i++) {
        let topGame = filteredGames.filter(game => game.globalsales === topGrossArray[i])
        foundGame.push(topGame)
    }

    let foundGameFlat = foundGame.flat(3);

    let foundGameName = [];
    for (let i = 0; i < foundGameFlat.length; i++) {
        foundGameName.push(foundGameFlat[i].name)
    }



    function generateChartData() {
        const data = [
            ["Game", "Sales", { role: "style" }],
            [foundGameName[0], topGrossArray[0], "gold"],
            [foundGameName[1], topGrossArray[1], "silver"],
            [foundGameName[2], topGrossArray[2], "brown"],
        ];
        // console.log('data in generateChartData: ', data);
        return data;
    }

    return (
        <div>
            <div>
                <h2>Top Grossing Games Globally for {props.yearInput}</h2>
                <p>Values represented in millions</p>
            </div>
            <div>
                {<Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />}
            </div>
        </div>
    )
}

export default TopGrossGames;