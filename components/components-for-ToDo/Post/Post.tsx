import React from "react";
import { useDispatch } from "react-redux";


const Post = ({ data }: { data: Post }) => {
  const dispatch = useDispatch();
  const addNewDone = () => {
    !data.isDone
      ? dispatch({ type: "CHANGE_DONE", Post: data })
      : dispatch({ type: "CHANGE_TODO", Post: data });
  };
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center mt-1  p-3 min-w-[250px] bg-sky-300 rounded-2xl">
        <div className="min-w-[5%]">
          <input
            type="checkbox"
            onChange={addNewDone}
            checked={data.isDone}
          ></input>
        </div>
        <div className="min-w-[90%] text-center">
          <p>{data.Title}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
