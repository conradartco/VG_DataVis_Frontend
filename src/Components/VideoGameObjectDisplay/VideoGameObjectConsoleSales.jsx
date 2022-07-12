import { Chart } from "react-google-charts";
import { useState } from "react";
import './VideoGameObjectCard.css';

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
        // title: "Number of Copies Sold",
        sliceVisibilityThreshold: 0.2,
        legend: {position: 'bottom', alignment: 'center'},
        colors: ["#437091", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#4caf50", "#8bc34a", "#cddc39"],
        areaOpacity: 0.24,
        lineWidth: 1,
        backgroundColor: "transparent",
        chartArea: {
            width: "90%",
            height: "80%",
            backgroundColor: "transparent",
        },
        width: "250px",
        height: "300px",
        pieSliceBorderColor: "transparent",
    }

    return (
        <div>
            <button className="card-button" onClick={handleClick}>View Sales by Console</button>
            {show && (
                <div className="chart-object">
                    <Chart chartType="PieChart" data={data} options={options} />
                </div>
            )} 
        </div>
    )
}

export default VideoGameObjectConsoleSales;