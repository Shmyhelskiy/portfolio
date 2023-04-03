import calculatorReducer from "./calculator.reducer";
import flashCardReducer from "./flashcard.reducer"

const rootReducer = {
    calculator: calculatorReducer,
    flashCard: flashCardReducer,
}

export default rootReducer