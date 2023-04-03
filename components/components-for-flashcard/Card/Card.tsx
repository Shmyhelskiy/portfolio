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
        <div className={styles["wrapper"]}>
            <div className={styles["container-top"]}>
                <div className={styles["container-top-left"]}>
                    <span>X</span>
                </div>
                <div className={styles["container-top-right"]}>
                    <div className={styles["container-top-right-top"]}>
                    <span className={styles["numbers-top"]}>{data.mathState.numberA}</span>
                    </div>
                    <div>
                    <span className={styles["numbers-top"]}>{data.mathState.numberB}</span>
                    </div>
                </div>
            </div>
            <div className={styles["container-bottom"]}>
                <div className={styles["container-bottom-top"]}>
               
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