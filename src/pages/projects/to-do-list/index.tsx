import Header from "../../../../components/components-for-ToDo/Header";
import { useDispatch, useSelector,  } from 'react-redux'
import TODO from "../../../../components/components-for-ToDo/ToDo";
import Done from "../../../../components/components-for-ToDo/Done";
import Heading from "../../../../components/Heading";
import { useEffect } from "react";
import {cleanstate, createState} from "../../../../store/actions/toDo.actions"

const ToDo = () => {
    const data: ToDoState = useSelector((state: Root) => state.ToDo as ToDoState )
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(createState());
    }, [dispatch]);
    return (
        <div className="h-screen flex flex-col relative">
            <Header />
            <main className="flex justify-center text-center flex-col md:flex-row">
                <div className="min-w-[250px]  max-w-[500px] max-h-[800px] mr-5 mt-3 break-all overflow-x-auto">
                    <Heading text="To-Do"></Heading>
                    <TODO></TODO>
                </div>
                <div  className="min-w-[250px] max-w-[500px] mr-5 mt-3 break-all max-h-[800px] overflow-x-auto ">
                <Heading text="Done"></Heading>
                    <Done></Done>
                </div>
            </main>
        </div>
    );
};

export default ToDo;