export const ADD_POST = "ADD_POST";
export const CHANGE_DONE = "CHANGE_DONE";
export const CHANGE_TODO = "CHANGE_TODO";
export const CLEAN_LIST = "CLEAN_LIST";
export const CREATE_STATE = "CREATE_STATE";
export const DELETE_ONE = "DELETE_ONE";

export const AddPost  = (Post:Post) => {
    return {
        type: ADD_POST,
        Post: Post
    }
}
export const changeDone = (Post:Post) =>{
    return {
        type: CHANGE_DONE,
        Post: Post
    }
}

export const changeToDo = (Post:Post) =>{
    return {
        type: CHANGE_TODO,
        Post: Post
    }
}

export const cleanstate = () =>{
    return {
        type: CLEAN_LIST,
    }
}

export const createState = () =>{
    return {
        type: CREATE_STATE,
    }
}

export const deleteOne = (Post:Post) =>{
    return {
        type: DELETE_ONE,
        Post: Post
    }
}