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
        // sliceVisibilityThreshold: 0.2,
        legend: {position: 'bottom', alignment: 'center'},
        colors: ["#437091", "#8cc0ed", "#244d71", "#6199c8", "#a0c3dd", "#d0deea"],
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