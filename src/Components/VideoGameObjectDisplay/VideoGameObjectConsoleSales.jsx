import { Chart } from "react-google-charts";
import { useState } from "react";

const VideoGameObjectConsoleSales = (props) => {

    const [show, setShow] = useState(false);

    const handleClick = event => {
        setShow(current => !current);
    }
    // console.log("props.allGames in here: ", props.allGames);

    let gameCopies = [];
    for (let i = 0; i < props.allGames.length; i++) {
        if (props.parentImport.name === props.allGames[i].name) {
            gameCopies.push(props.allGames[i]);
        }
    }
    // console.log("gameCopies in here: ", gameCopies);
        
    let gameConsoles = [];
    for (let i = 0; i < gameCopies.length; i++) {
        gameConsoles.push(gameCopies[i].platform);
    }
    // console.log("gameConsoles in here: ", gameConsoles);

    let consoleArrays = gameConsoles.map(console => {
        
        let globalSalesByConsole = gameCopies.map(game => game.globalsales);

        let gameGlobalSales = []
        for (let i = 0; i < globalSalesByConsole.length; i++) {
            gameGlobalSales = globalSalesByConsole[i];
        }

        return [console, gameGlobalSales]
    })

    console.log("consoleArrays in here: ", consoleArrays);

    const data = [
        ["Console", "Sales"],
        ...consoleArrays
    ]
    console.log("data in here: ", data);

    const options = {
        title: "Number of Copies Sold",
        sliceVisibilityThreshold: 0.2,
    }

    return (
        <div>
            <button onClick={handleClick}>View Sales</button>
            {show && (
                <div>
                    <Chart chartType="PieChart" data={data} options={options} width={"100%"} height={"400px"} />
                </div>
            )} 
        </div>
    )
}

export default VideoGameObjectConsoleSales;