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
    console.log('gamesGlobalSales inside gameArrays: ', gamesGlobalSales);

    let gamesGlobalSalesSorted = gamesGlobalSales.sort((a, b) => b - a);
    console.log('gamesGlobalSalesSorted inside gameArrays: ', gamesGlobalSalesSorted);

    let gameFirstPlace = filteredGames.filter(game => game.globalsales === gamesGlobalSalesSorted[0]);
    console.log('gameFirstPlace inside gameArrays: ', gameFirstPlace);
    let gameSecondPlace = filteredGames.filter(game => game.globalsales === gamesGlobalSalesSorted[1]);
    let gameThirdPlace = filteredGames.filter(game => game.globalsales === gamesGlobalSalesSorted[2]);


    let gameArrays = [

        [gameFirstPlace[0].name, gamesGlobalSalesSorted[0], "silver"],
        [gameSecondPlace[0].name, gamesGlobalSalesSorted[1], "silver"],
        [gameThirdPlace[0].name, gamesGlobalSalesSorted[2], "silver"],

        ]

    console.log('gameArrays inside TopGrossGames', gameArrays);

    function generateChartData() {
        const data = [
            ["Game", "Sales", { role: "style" }],
            ...gameArrays
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