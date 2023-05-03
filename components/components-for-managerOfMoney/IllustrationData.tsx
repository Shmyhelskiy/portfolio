import { useDispatch, useSelector } from "react-redux";
import { resetMoneyState } from "../../store/actions/manager-of-money.actions";
import { useState } from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { calculateTheSavings, takePeriodOfTime } from "../../functions/managerOfMonay.functions/managerOfMoney.function";

const IllustrationData = () => {
    const dispatch = useDispatch();
    const data: managerOfMoneyState = useSelector((state: Root) => state.managerOfMoney as managerOfMoneyState );

    const [, set] = useState();

    const chartData = {
        labels: ['Living Expenses', 'Savings'],
        datasets: [
        {
            label: 'My First Dataset',
            data: [
                data.DataMoney.livingExpenses,
                data.DataMoney.savings],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            hoverOffset: 4,
        }],
    };


    
        const LineData = {
            labels: takePeriodOfTime(data.DataMoney.savingsYears),
            datasets: [{
                data: calculateTheSavings(data.DataMoney.salary, data.DataMoney.savings, data.DataMoney.savingsYears, data.DataMoney.percentage),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.5
            }]
    };
    return (
        <div className="flex flex-col  justify-center items-center">

            <div className="flex flex-col justify-center mb-5">
                <div className="flex flex-col md:flex-row">
                <PieChart data={chartData}/>
                <div className="ml-5 flex flex-col">
                    <div className="flex items-center">
                        <div className="h-5 w-8 bg-sky-500 mr-2"></div>
                        <p>{chartData.labels[0]} {chartData.datasets[0].data[0]}%</p>
                    </div>
                    <div className="flex items-center">
                        <div className="h-5 w-8 bg-red-400 mr-2"></div>
                        <p>{chartData.labels[1]} {chartData.datasets[0].data[1]}%</p>
                    </div>
                </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
            <LineChart  data={LineData}/> 
            <div className="ml-5 flex flex-col">
                    <div className="flex items-center w-full mt-5 md:w-1/2">
                        <p>This is how much money you will save in {data.DataMoney.savingsYears} years if you save {data.DataMoney.savings}% of your salary at {data.DataMoney.percentage}% annually.</p>
                    </div>
                </div>
            </div>
            <button onClick={()=> dispatch(resetMoneyState())} className="flex justify-center items-center mt-5 rounded-xl dark:bg-sky-500 dark:text-black dark:border-white border-black border-2 w-20 active:shadow-[inset_0_-2px_10px_rgba(0,0,0,0.75)]">Reset</button>
        </div>
    );
};

export default IllustrationData;