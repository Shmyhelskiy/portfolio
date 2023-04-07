import Head from "next/head";
import { useEffect } from 'react';   
import styles from "../../../styles/Projects/FlashCard/FlashCard.module.css"
import Card from '../../../../components/components-for-flashcard/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import {fillArray} from "../../../../store/actions/flashcard.actions"
function App() {
  const dispatch = useDispatch();
  const data: NumbersState = useSelector((state: Root) => state.flashCard as NumbersState )
useEffect (() => {
    dispatch(fillArray(10))
}, [dispatch])

  return (
    <>
    <Head>
      <title>Flash Card</title>
    </Head>
    <div className="flex m-5 h-full items-center flex-col ">
      <div className={styles["container"]}>
        <div className={styles["test"]}>
          <span>Score: </span>
          {data.score}
        </div>
        <div className={styles["test"]}>
          <span>Attempts: </span>
          {data.attempts}
        </div>
      </div>
      <Card /> 
    </div>
    </>
  );
}

export default App;