import { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
    const [title, setTitle] = useState("");
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

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
            className="text-lg mr-5 outline-0 focus:border-b focus:border-b-orange-300"
            placeholder="Add Task"
            type="text"
            onChange={takeTask}
            value={value}
            />
            <button className="rounded-2xl p-1 hover:bg-sky-500" onClick={addNewPost}>
            CREATE
            </button>
        </div>
    </header>
    );
};

export default Header;