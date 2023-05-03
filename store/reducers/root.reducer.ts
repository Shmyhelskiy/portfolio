import calculatorReducer from "./calculator.reducer";
import flashCardReducer from "./flashcard.reducer"
import ToDoReducer from "./to-do.reducer";
import managerOfMoneyReducer from "./manager-of-money.reducer"

const rootReducer = {
    calculator: calculatorReducer,
    flashCard: flashCardReducer,
    ToDo: ToDoReducer,
    managerOfMoney: managerOfMoneyReducer,
}

export default rootReducer