import calculatorReducer from "./calculator.reducer";
import flashCardReducer from "./flashcard.reducer"
import ToDoReducer from "./to-do.reducer";

const rootReducer = {
    calculator: calculatorReducer,
    flashCard: flashCardReducer,
    ToDo: ToDoReducer,
}

export default rootReducer