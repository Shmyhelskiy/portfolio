import { Pie} from "react-chartjs-2";
import {Chart,ArcElement} from 'chart.js';
import { FC } from "react";
Chart.register(ArcElement)

type PieChartProps = {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
            hoverOffset: number;
        }[];
    };
    };

    const PieChart:FC<PieChartProps> = ({data}) => {
        return (
            <div className="flex flex-col md:flex-row">
                <Pie data={data} />
            </div>
        );
    };

export default PieChart;