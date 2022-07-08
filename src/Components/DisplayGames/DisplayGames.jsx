import { Chart } from "react-google-charts";


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

    return (
        <div>
            <h2>Games sold globally since 2013</h2>
            <p>Values represented in millions</p>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateChartData()} />
        </div>
    );
}

export default DisplayGames;