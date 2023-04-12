import { ADD_POST, CHANGE_DONE, CHANGE_TODO, CLEAN_LIST, CREATE_STATE, DELETE_ONE } from "../actions/toDo.actions";

export const ToDoState: ToDoState = {
  ToDo: [],
  Done: [],
  counter: 0,
};
const  ToDoReducer = (state = ToDoState, action:ToDoAction) =>{
  switch (action.type) {
    case ADD_POST:
      const newData = [...state.ToDo, action.Post];
      let newCounter = state.counter
      newCounter++
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, ToDo: newData,counter: newCounter })
      );
      return { ...state, ToDo: newData, counter: newCounter };

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
      const lastState = lastStateString ? JSON.parse(lastStateString) : state;
      return lastState;

    case DELETE_ONE: 
      const {Post} = action;
      const replicaToDo = state.ToDo;
      const replicaDone = state.Done;

      
      if(!Post.isDone) {
        replicaToDo.splice(state.ToDo.findIndex((item) => item.id === Post.id), 1);
      } else {
        replicaDone.splice(state.Done.findIndex((item) => item.id === Post.id), 1);
      }
      localStorage.setItem( "state", JSON.stringify({ ...state, ToDo: replicaToDo, Done: replicaDone }));
    return { ...state, ToDo: replicaToDo, Done: replicaDone };
      
    default:
      return state;
  }
}

export default ToDoReducer;
