import { ADD_POST, CHANGE_DONE, CHANGE_TODO, CLEAN_LIST, CREATE_STATE } from "../actions/toDo.actions";

export const ToDoState: ToDoState = {
  ToDo: [],
  Done: [],
};
const  ToDoReducer = (state = ToDoState, action:ToDoAction) =>{
  switch (action.type) {
    case ADD_POST:
      const newData = [...state.ToDo, action.Post];
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, ToDo: newData })
      );
      return { ...state, ToDo: newData };

    case CHANGE_DONE:
      const copyToDo = [...state.ToDo];
      const Done = action.Post;
      Done.isDone = true;
        
      if (Done.isDone) {
        const findIdndex = state.ToDo.findIndex((item) => item.id === Done.id);
        copyToDo.splice(findIdndex, 1);
      }
      
      
      const newDone = [...state.Done, Done];
      localStorage.setItem( "state", JSON.stringify({ ...state, ToDo: copyToDo, Done: newDone })
      );
      return { ...state, ToDo: copyToDo, Done: newDone };

    case CHANGE_TODO:
      const copyDone = [...state.Done];
      const ToDo = action.Post;
      ToDo.isDone = false;
      if (!ToDo.isDone) {
        const findIdndex = state.Done.findIndex((item) => item.id === ToDo.id);
        copyDone.splice(findIdndex, 1);
      }
      const newToDo = [...state.ToDo, ToDo];
      localStorage.setItem("state", JSON.stringify({ ...state, Done: copyDone, ToDo: newToDo }));
      return { ...state, Done: copyDone, ToDo: newToDo };

    case CLEAN_LIST:

      localStorage.setItem("state", JSON.stringify(ToDoState));
      return ToDoState;
  
    case CREATE_STATE:
      const lastStateString = localStorage.getItem("state");
      const lastState = lastStateString ? JSON.parse(lastStateString) : null;
      if (lastState !== null) {
        return lastState;
        } else {
        return []
      }

    default:
      return state;
  }
}

export default ToDoReducer;
