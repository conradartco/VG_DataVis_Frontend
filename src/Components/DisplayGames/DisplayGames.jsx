import { Chart } from "react-google-charts";

const DisplayGames = (props) => {

    function getChartData(gameData) {
        // for (let i = 0; i < gameData.length; i++) {
        //     return (
        //         ([gameData.platform, gameData.globalsales] + ', ')
        //     )
        // }
        const chartData = gameData.map((game) => {
            return(
                ([game.platform, game.globalsales] + ', ')
            )
        })
        return chartData;
    }

    return (
        <div>
            {/* {console.log("props.vgData in DisplayGames: " + props.vgData)} */}
            <Chart chartType="ColumnChart" width="100%" height="500px" data={[
                ["Platform", "Sales"], 
                getChartData(props.vgData)
            ]}/>
        </div>
    );
}

export default DisplayGames;