import Head from "next/head";
import { useEffect } from 'react';   
import Card from '../../../../components/components-for-flashcard/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import {fillArray} from "../../../../store/actions/flashcard.actions"
import TransitionEffect from "../../../../components/TransitionEffect";
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
    <TransitionEffect />
    <div className="flex m-5 h-full items-center flex-col mb-5">
      <div className="w-full h-14 flex justify-evenly sm:text-2xl md:text-3xl lg:text-4xl">
        <div>
          <span>Score: {data.score} </span>
        </div>
        <div>
          <span>Attempts: {data.attempts}</span>
        </div>
      </div>
      <Card /> 
    </div>
    </>
  );
}

export default App;