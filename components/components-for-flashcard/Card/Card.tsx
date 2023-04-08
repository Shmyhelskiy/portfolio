import { FC } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Box from "../Box/Box";
import {giveResult, fillArray} from "../../../store/actions/flashcard.actions"

const Card: FC = () => {
    const data: NumbersState = useSelector((state: Root) => state.flashCard as NumbersState )
const dispatch = useDispatch();

const handleClick = () =>{
    dispatch(fillArray(10))
}

return (
        <div className="w-1/4 h-400 lg:h-700   flex mt-2 items-center flex-col bg-amber-100">
            <div className="w-3/4 h-1/2 flex border-b-[3px] border-black">
                <div className="w-1/3 flex justify-end items-end text-7xl">
                    <span>X</span>
                </div>
                <div className="w-3/4 h-full flex flex-col items-center justify-between">
                    <div>
                    <span className="text-7xl lg:text-9xl" >{data.mathState.numberA}</span>
                    </div>
                    <div>
                    <span className="text-7xl lg:text-9xl">{data.mathState.numberB}</span>
                    </div>
                </div>
            </div>
            <div className="h-1/2 w-full">
                <div className="w-full h-1/2 flex flex-col items-center justify-evenly text-lg">
                { data.mathState.isRight === undefined ? (
                        <span className="text-red-500"></span> 
                    ) : !data.mathState.isRight ? (
                        <span className="text-red-500">Wrong</span> 
                    ) : <span className="text-blue-800 font-bold text">Correct</span>}
                    { data.mathState.isRight === undefined || !data.mathState.isRight  ? (
                        <span className='text-sm sm:text-base '>Choose Your Answer</span> 
                    ) : <span className="p-3 rounded-2xl text-orange-300 bg-indigo-600 hover:cursor-pointer" onClick={handleClick}>Play again?</span>}
                </div>
                <div className="w-full h-1/2 flex items-center flex-col justify-center"> 
                    <div className='flex gap-2 w-full'>
                        {data.mathState.numbers[0].map(item => <Box disabled={data.mathState.isRight}number={item} key={item} onClick={()=> dispatch(giveResult(item))}/>)}
                    </div>
                    <div className='flex gap-2 w-full'>
                    {data.mathState.numbers[1].map(item => <Box  disabled={data.mathState.isRight} number={item} key={item} onClick={()=> dispatch(giveResult(item))}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;