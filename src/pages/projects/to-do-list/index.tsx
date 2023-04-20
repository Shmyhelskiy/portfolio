import Header from "../../../../components/components-for-ToDo/Header";
import { useDispatch, useSelector,  } from 'react-redux'
import TODO from "../../../../components/components-for-ToDo/ToDo";
import Done from "../../../../components/components-for-ToDo/Done";
import Heading from "../../../../components/Heading";
import { useEffect } from "react";
import {createState} from "../../../../store/actions/toDo.actions"
import TransitionEffect from "../../../../components/TransitionEffect";
import Head from "next/head";

const ToDo = () => {
    const data: ToDoState = useSelector((state: Root) => state.ToDo as ToDoState )
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(createState());
    }, [dispatch]);
    return (
    <>
        <Head>
            <title>Todo List</title>
        </Head>
        <main className="h-full flex flex-col">
            <Header />
            <TransitionEffect />
            <div className="flex justify-center text-center flex-col md:flex-row">
                <div className="min-w-[250px]  max-w-[500px] max-h-[600px] mr-5 mt-3 break-all overflow-x-auto">
                    <Heading text="To-Do"></Heading>
                    <TODO></TODO>
                </div>
                <div  className="min-w-[250px] max-w-[500px] max-h-[600px] mr-5 mt-3 break-all  overflow-x-auto ">
                <Heading text="Done"></Heading>
                    <Done></Done>
                </div>
            </div>
        </main>
    </>
    );
};

export default ToDo;