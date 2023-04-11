import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Done = () => {
  const data: ToDoState = useSelector((state: Root) => state.ToDo as ToDoState )
  return (
    <div>
      {data.Done.map((item) => (
        <Post key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Done;
