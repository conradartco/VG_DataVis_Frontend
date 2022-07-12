import { Chart } from "react-google-charts";
import { useState } from "react";

const VideoGameObjectConsoleSales = (props) => {

    const [show, setShow] = useState(false);

    const handleClick = event => {
        setShow(current => !current);
    }

    let results = props.allGames.filter(el => props.parentImport.name === el.name).map(el => [el.platform, el.globalsales])

    const data = [
        ["Console", "Sales"],
        ...results
    ]
    console.log("data in VideoGameObjectConsoleSales: ", data);

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