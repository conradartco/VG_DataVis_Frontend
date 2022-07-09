// import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import YearSearchField from "../YearSearchField/YearSearchField";

// To-Do //
// Create an input field that will accept user requested year // or drop-down menu with available years
// Get the selected year in database and pull all games from that year
// Filter games from selected year by globalsales
// Map globalsales games by top 3 earners
// Display top 3 earners to user as a data visualization

const TopGrossGames = ({videoGames}) => {


    let filteredGames = videoGames.filter(game => game.year === 2000);
    console.log('filteredGames inside TopGrossGames: ', filteredGames);

    let gamesGlobalSales = filteredGames.map(game => game.globalsales);
    console.log('gamesGlobalSales inside TopGrossGames: ', gamesGlobalSales);

    let gamesGlobalSalesSorted = gamesGlobalSales.sort((a, b) => b - a);
    console.log('gamesGlobalSalesSorted inside TopGrossGames: ', gamesGlobalSalesSorted);

    const topGrossArray = []
    for (let i = 0; (i <3 && i < gamesGlobalSalesSorted.length); i++) {
        topGrossArray.push(gamesGlobalSalesSorted[i]);
    }
    console.log('topGrossArray in TopGrossGames: ', topGrossArray);

    let gameDataArray = topGrossArray.map(data => {

        let foundGame = [];
        for (let i = 0; i < topGrossArray.length; i++) {
            let topGame = filteredGames.filter(game => game.globalsales === topGrossArray[i])
            foundGame.push(topGame)
        }
        console.log('foundGame in gameDataArray: ', foundGame);

        let foundGameFlat = foundGame.flat(3);
        console.log('foundGameFlat in gameDataArray: ', foundGameFlat);

        let foundGameName = [];
        for (let i = 0; i < foundGameFlat.length; i++) {
            foundGameName.push(foundGameFlat[i].name)
        }
        console.log('foundGameName in gameDataArray: ', foundGameName);

        // const indexIterator = (i) => i += 0;
        var y = 0;
        var x = foundGameName.reduce(
            (previousValue, currentValue) => previousValue + currentValue, y
        );

        return [foundGameName[x], data, "silver"]
    })
    console.log('gameDataArray in TopGrossGames: ', gameDataArray);

    function generateChartData() {
        const data = [
            ["Game", "Sales", { role: "style" }],
            ...gameDataArray
        ];
        console.log('data in generateChartData: ', data);
        return data;
    }

    return (
        <div>
            <div>
                <YearSearchField videoGames={videoGames}/>
            </div>
            <div>
                <h2>Top Grossing Games Globally for 'YEAR'</h2>
                <p>Values represented in millions</p>
                {videoGames.length > 0 && <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />}
            </div>
        </div>
    )
}

export default TopGrossGames;