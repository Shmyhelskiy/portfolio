import { Line} from "react-chartjs-2";
import {Chart, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js';
import { FC } from "react";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement)


type LineChartProps = {
    data: {
        labels: number[];
        datasets: {
            data: number[];
            fill: boolean,
            borderColor: string;
            tension: number;
        }[];
    };
    };


    const LineChart:FC<LineChartProps> = ({data}) => {
        return (
            <div className="flex flex-col md:flex-row">
                <Line data={data} />
            </div>
        );
    };

export default LineChart;