import Button from "../../../../components/Button"
import styles from "../../../styles/Calculator.module.css"
import { operation, addNumber, addPoint, Clear, showResult } from "../../../../store/actions/calculator.actions";
import { useDispatch, useSelector } from "react-redux";


const Calculator = () => {
    const dispatch = useDispatch();
    const data: calculatorState = useSelector((state: Root) => state.calculator as calculatorState )
    
    return (
        <main className={styles["wraper"]}> 
            <div className={styles["container"]}>
                <div className={styles["display"]}>
                    <h3>{data.display}</h3>
                </div>
                <table className={styles["buttons"]}>
                    <tbody>
                        <tr>
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
                        <tr>
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
                        <tr>
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
                        <tr>
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
    );
};

export default Calculator;