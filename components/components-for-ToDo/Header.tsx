import { SetStateAction, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanstate } from "../../store/actions/toDo.actions";

const Header = () => {
    const data: ToDoState = useSelector((state: Root) => state.ToDo as ToDoState )
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState("");
    
    useEffect(() => {
        getCounter()
        }, []);

    const getCounter = () => {
        const checkout = typeof window !== 'undefined' ? localStorage.getItem('state') : null
        const lastState = checkout ? JSON.parse(checkout) : 0;
        setCounter(lastState.counter)
    }
    
    const takeTask = (event: { target: { value: SetStateAction<string>; }; }) => {
        setTitle(event.target.value);
        setValue(event.target.value);
    };
    
    const createNewPost = () => {
        const newPost = { Title: title, isDone: false, id: 0,};
        newPost.id = counter;
        setCounter((counter) => counter + 1);
        return newPost;
    };
    
    const addNewPost = () => {
        if (value === "") {
        alert(`Write task`);
        return;
        }
        dispatch({ type: "ADD_POST", Post: createNewPost() });
        setValue("");
    };

    return (
        <header className="m-5 flex flex-col items-center">
        <div className="text-white flex justify-center items-center bg-sky-500 min-w-[250px] text-base md:text-xl lg:text-4xl rounded-md ">
            <h2>To-Do List</h2>
        </div>
        <div className="flex justify-center pt-5">
            <input
            className="text-sm md:text-lg mr-5 outline-0 focus:border-b focus:border-b-orange-300"
            placeholder="Add Task"
            type="text"
            onChange={takeTask}
            value={value}
            />
            <button className="rounded-2xl p-1 text-sm md:text-lg hover:bg-sky-500" onClick={addNewPost}>
            CREATE
            </button>
            <div onClick={()=> dispatch(cleanstate())}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 sm:w-10 h-5 sm:h-10 rounded-full ml-10  hover:scale-125"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>    
            </div>
        </div>
    </header>
    );
};

export default Header;