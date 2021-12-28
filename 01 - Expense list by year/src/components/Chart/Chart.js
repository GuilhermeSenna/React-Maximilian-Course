import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = props => {
    // Convert the array of objects into array of numbers (datapoint.value)
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    // Spread to get the elements 
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}

export default Chart;