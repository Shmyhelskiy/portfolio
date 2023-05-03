import { checkData, takeProsent } from "../../functions/managerOfMonay.functions/managerOfMoney.function";
import Instruction from "./Instruction";
import { useDispatch } from "react-redux";
import { takeDataMoney } from "../../store/actions/manager-of-money.actions";
import { useState } from "react";

const DataForm = () => {
    const dispatch = useDispatch();
    const [isUnCorrect, setIsUnCorrect] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement; 
        const inputSalary = form.elements.namedItem("salary") as HTMLInputElement; 
        const inputLivingExpenses = form.elements.namedItem("livingExpenses") as HTMLInputElement; 
        const inputSavings = form.elements.namedItem("savings") as HTMLInputElement; 
        const inputSavingsYears = form.elements.namedItem("savingsYears") as HTMLInputElement; 
        const inputPercentage = form.elements.namedItem("percentage") as HTMLInputElement; 

        let dataMoney = {
            salary: parseInt(inputSalary.value),
            livingExpenses: parseInt(inputLivingExpenses.value),
            savings: parseInt(inputSavings.value),
            savingsYears: parseInt(inputSavingsYears.value),
            percentage: parseInt(inputPercentage.value),
        }
        
        if(checkData(dataMoney.salary, dataMoney.livingExpenses, dataMoney.savings)) {
            dataMoney = takeProsent(dataMoney);
            dispatch((takeDataMoney(dataMoney)));
            return 
        }
        return setIsUnCorrect(true)
        
    }
    {isUnCorrect ? alert(`Something wrong, check your data`) : null}
    return (
        <div className="flex flex-col md:flex-row">
            <Instruction />
            <div >
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md ">
                    <label htmlFor="salary" className="block mb-2 font-semibold text-gray-700">Salary:</label>
                    <input type="number" name="salary" min={0} className="w-full mb-4 px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"/>

                    <label htmlFor="livingExpenses" className="block mb-2 font-semibold text-gray-700">Living Expenses:</label>
                    <input type="number" name="livingExpenses" min={0} className="w-full mb-4 px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"/>

                    <label htmlFor="savings" className="block mb-2 font-semibold text-gray-700">Savings:</label>
                    <input type="number"  name="savings" min={0} className="w-full mb-4 px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"/>

                    <label htmlFor="savingsYears" className="block mb-2 font-semibold text-gray-700">How many years are you going to save?</label>
                    <input type="number"  name="savingsYears" min={1} max={100} className="w-full mb-4 px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"/>

                    <label htmlFor="percentage" className="block mb-2 font-semibold text-gray-700">At what percentage will your money be kept?</label>
                    <input type="number"  name="percentage" min={1} max={100} className="w-full mb-4 px-3 py-2 rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"/>

                    <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DataForm;