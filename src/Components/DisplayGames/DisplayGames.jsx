import { Chart } from "react-google-charts";
import "./DisplayGames.css";

const DisplayGames = ({videoGames}) => {

    let filteredGames = videoGames.filter(game => game.year >= 2013);
    // console.log('filteredGames inside DisplayGames: ', filteredGames);

    let platforms = filteredGames.map(game => game.platform);
    // console.log('platforms iniside DisplayGames: ', platforms);

    let distinctPlatform = [...new Set(platforms)];
    // console.log('distinctPlatform in Display Games: ', distinctPlatform);

    let platformArrays = distinctPlatform.map(platform => {

        let allGamesForPlatform = filteredGames.filter(game => game.platform === platform);
        // console.log('allGamesForPlatform in platformArrays: ', allGamesForPlatform);
        // loop through allGamesForPlatform and sum each globalsales

        let globalSalesByPlatform = allGamesForPlatform.map(game => game.globalsales);
        // console.log('globalSalesByPlatform in platformArrays: ', globalSalesByPlatform);

        let globalSalesSum = globalSalesByPlatform.reduce((partialSum, a) => partialSum + a, 0);
        // console.log('globalSalesSum in platformArrays: ', globalSalesSum);
        // with sum of globalsales - drop into index 1 of return array

        return [platform, globalSalesSum, "silver"]
    });
    // console.log("platformArrays in DisplayGames: ", platformArrays);

    function generateChartData() {
        const data = [
            ["Platform", "Sales", { role: "style" }],
            ...platformArrays
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
                <h2>Top Earning Consoles Since 2013</h2>
            </div>
            <div className="game-sales-chart">
                <Chart chartType="ColumnChart" options={options} data={generateChartData()} />
                <p className="footnote">Values represented in millions</p>
            </div>
        </div>
        
    );
}

export default DisplayGames;