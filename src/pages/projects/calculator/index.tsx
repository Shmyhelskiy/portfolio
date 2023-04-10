import Head from "next/head";
import Button from "../../../../components/componetns-for-calculator/Button"
import { operation, addNumber, addPoint, Clear, showResult } from "../../../../store/actions/calculator.actions";
import { useDispatch, useSelector } from "react-redux";


const Calculator = () => {
    const dispatch = useDispatch();
    const data: calculatorState = useSelector((state: Root) => state.calculator as calculatorState )
    
    return (
        <>
        <Head>
        <title>Calculator</title>
        </Head>
        <main className="flex items-center justify-center h-[80vh]"> 
            <div className="gap-2 w-[350px] h-[400px] border-2 border-black rounded-2xl bg-gray-800 flex flex-col items-center justify-center">
                <div className="w-[80%] h-[40px] flex items-center justify-center bg-cyan-800">
                    <h3 className="w-[85%] text-right rounded-2xl bg-gray-400 pr-1 overflow-hidden">
                        {data.display}
                    </h3>
                </div>
                <table className="w-[80%] h-[80%]">
                    <tbody>
                        <tr className="gap-2 w-[90%] m-5 flex justify-center">
                            <td>
                                <Button text={`7`} onClick={()=> dispatch(addNumber(`7`))} />
                            </td>
                            <td>
                                <Button text={`8`} onClick={()=> dispatch(addNumber(`8`))}/>
                            </td>
                            <td>
                                <Button text={`9`} onClick={()=> dispatch(addNumber(`9`))}/>
                            </td>
                            <td>
                                <Button text={`/`} onClick={()=> dispatch(operation(`division`))}/>
                            </td>
                            <td>
                                <Button text={`x^y`} onClick={()=> dispatch(operation(`pow`))}/>
                            </td>
                        </tr>
                        <tr className="gap-2 w-[90%] m-5 flex justify-center">
                            <td>
                                <Button text={`4`} onClick={()=> dispatch(addNumber(`4`))}/>
                            </td>
                            <td>
                                <Button text={`5`} onClick={()=> dispatch(addNumber(`5`))}/>
                            </td>
                            <td>
                                <Button text={`6`} onClick={()=> dispatch(addNumber(`6`))}/>
                            </td>
                            <td>
                                <Button text={`*`} onClick={()=> dispatch(operation(`multiplication`))}/>
                            </td>
                            <td>
                                <Button text={`%`} onClick={()=> dispatch(operation(`percentageOf`))}/>
                            </td>
                        </tr>
                        <tr className="gap-2 w-[90%] m-5 flex justify-center">
                            <td>
                                <Button text={`1`} onClick={()=> dispatch(addNumber(`1`))}/>
                            </td>
                            <td>
                                <Button text={`2`} onClick={()=> dispatch(addNumber(`2`))}/>
                            </td>
                            <td>
                                <Button text={`3`} onClick={()=> dispatch(addNumber(`3`))}/>
                            </td>
                            <td>
                                <Button text={`-`} onClick={()=> dispatch(operation(`subtraction`))}/>
                            </td>
                            <td>
                                <Button text={`√`} onClick={()=> dispatch(operation(`sqrt`))}/>
                            </td>
                        </tr>
                        <tr className="gap-2 w-[90%] m-5 flex justify-center">
                            <td>
                                <Button text={`C`} onClick={()=> dispatch(Clear())}/>
                            </td>
                            <td>
                                <Button text={`0`} onClick={()=> dispatch(addNumber(`0`))}/>
                            </td>
                            <td>
                                <Button text={`.`} onClick={()=> dispatch(addPoint())}/>
                            </td>
                            <td>
                                <Button text={`+`} onClick={()=> dispatch(operation(`sum`))}/>
                            </td>
                            <td>
                                <Button text={`=`} onClick={()=> dispatch(showResult())}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
        </>
    );
};

export default Calculator;