import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import "./TopGrossGames.css";

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
            [foundGameName[0], topGrossArray[0], "#437091"],
            [foundGameName[1], topGrossArray[1], "#759dba"],
            [foundGameName[2], topGrossArray[2], "#afcbe0"],
        ];
        // console.log('data in generateChartData: ', data);
        return data;
    }

    const options = {
        hAxis: {
            gridlines: { count:0},
            textStyle: { color: '#1a4c71', fontName: 'Roboto', fontSize: '12', bold: true}
        },
        vAxis: {
            gridlines: {color: "#437091", count:4},
            baselineColor: "transparent",
            textStyle: { color: '#437091', fontName: 'Roboto', fontSize: '12', bold: true}
        },
        legend: {position: "top", alignment: "center"},
        areaOpacity: 0.24,
        lineWidth: 1,
        backgroundColor: "transparent",
        chartArea: {
            backgroundColor: "transparent",
            width: "90%",
            height: "80%",
        },
        height: "300",
        width: "600",
    }

    return (
        <div>
            <div className='chart-header'>
                <h2>Top Grossing Games Globally for {props.yearInput}</h2>
            </div>
            <div className='gross-games-chart'>
                {<Chart chartType="ColumnChart" options={options} data={generateChartData()} />}
                <p className='footnote'>Values represented in millions</p>
            </div>
        </div>
    )
}

export default TopGrossGames;