import { FC } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import styles from "../../../src/styles/Projects/FlashCard/Card.module.css"
import Box from "../Box/Box";
import {giveResult, fillArray} from "../../../store/actions/flashcard.actions"

const Card: FC = () => {
    const data: NumbersState = useSelector((state: Root) => state.flashCard as NumbersState )
const dispatch = useDispatch();

const handleClick = () =>{
    dispatch(fillArray(10))
}

return (
        <div className="w-1/4 h-1/2 flex mt-2 items-center flex-col bg-amber-100">
            <div className="w-3/4 h-1/2 flex border-b-[3px] border-black">
                <div className="w-1/3  flex justify-end items-end text-7xl">
                    <span>X</span>
                </div>
                <div className="w-3/4 h-full flex flex-col items-center justify-between">
                    <div>
                    <span className="text-9xl" >{data.mathState.numberA}</span>
                    </div>
                    <div>
                    <span className="text-9xl">{data.mathState.numberB}</span>
                    </div>
                </div>
            </div>
            <div className="h-1/2 w-full">
                <div className="w-full h-1/3 flex flex-col items-center justify-around">
                { data.mathState.isRight === undefined ? (
                        <span className={styles["wrong"]}></span> 
                    ) : !data.mathState.isRight ? (
                        <span className={styles["wrong"]}>Wrong</span> 
                    ) : <span className={styles["right"]}>Correct</span>}
                    { data.mathState.isRight === undefined || !data.mathState.isRight  ? (
                        <span>Choose Your Answer</span> 
                    ) : <span className={styles["again"]} onClick={handleClick}>Play again?</span>}
                </div>
                <div className={styles["numbers-bottom"]}> 
                    <div>
                        {data.mathState.numbers[0].map(item => <Box disabled={data.mathState.isRight}number={item} key={item} onClick={()=> dispatch(giveResult(item))}/>)}
                    </div>
                    <div>
                    {data.mathState.numbers[1].map(item => <Box  disabled={data.mathState.isRight} number={item} key={item} onClick={()=> dispatch(giveResult(item))}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;