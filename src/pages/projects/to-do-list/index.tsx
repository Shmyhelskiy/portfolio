import Header from "../../../../components/components-for-ToDo/Header";
import { useDispatch, useSelector,  } from 'react-redux'
import Image from "next/image";
import TODO from "../../../../components/components-for-ToDo/ToDo";
import Done from "../../../../components/components-for-ToDo/Done";
import Heading from "../../../../components/Heading";
import { useEffect } from "react";
import {cleanstate} from "../../../../store/actions/toDo.actions"

const ToDo = () => {
    const data: ToDoState = useSelector((state: Root) => state.ToDo as ToDoState )
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch({ type: "CREATE_STATE" });
    }, [dispatch]);
    return (
        <div className="h-screen flex  flex-col relative">
            <Header />
            <main className="flex justify-center text-center">
                <div className="min-w-[250px] max-w-[500px] max-h-[800px] mr-5 mt-3 break-all overflow-x-auto">
                    <Heading text="To-Do"></Heading>
                    <TODO></TODO>
                </div>
                <div  className="min-w-[250px] max-w-[500px] mr-5 mt-3 break-all max-h-[800px] overflow-x-auto ">
                <Heading text="Done"></Heading>
                    <Done></Done>
                </div>
            </main>
            <div onClick={()=> dispatch(cleanstate())}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 absolute right-10 rounded-full  hover:bg-sky-300"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>    
            </div>
        </div>
    );
};

export default ToDo;