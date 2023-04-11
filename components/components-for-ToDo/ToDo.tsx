import { useSelector } from "react-redux";
import Post from "./Post/Post"

const TODO = () => {
    const data: ToDoState = useSelector((state: Root) => state.ToDo as ToDoState )
    
return (
    <div>
    {data.ToDo.map((item) => (
        <Post key={item.id} data={item} />
    ))}
    </div>
);
};

export default TODO;