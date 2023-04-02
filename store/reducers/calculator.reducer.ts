import { operation } from "../../functions/calculator.fanctions/calculator.fanctions";
import { ADD_NUMBER, RESET_DISPLAY, DECIMAL, MATHOPERATION, SHOW_RESULT } from "../actions/calculator.actions"

const initialState: calculatorState = {
        display: `0`,
        firstOperand: null,
        waitingForSecondOperand: false,
        memory: 0,
        show: false
}

const calculatorReducer = (state = initialState, action: CalculatorAction) => {
    switch (action.type) {
        case RESET_DISPLAY: {     
            return initialState;
        }
        case ADD_NUMBER: {
           const { number } = action.payload;
           const newDisplay = state.display === "0" ? number : state.display + number;
           return { ...state, display: newDisplay };
        }
        case DECIMAL : {
            if (!state.display.includes(".")) {
                const newDisplay = state.display + ".";
                return { ...state, display: newDisplay, show: false};
              }
              return state;
            }

        case MATHOPERATION: {
            let {display, memory, firstOperand, waitingForSecondOperand} = state
            const {operator} = action.payload;
            let newResult;

            if ( operator === `subtraction` && display === "0"){
                const newDisplay = '-'
                return { ...state, display: newDisplay}
            }
            
            if ( !waitingForSecondOperand && operator !== `sqrt`) {
                return {...state, display: `0`, memory: Number(display), firstOperand: operator, waitingForSecondOperand: true}
            } else if ( operator === `sqrt`) {
                newResult = operation(Number(display),memory, operator)
                return {...state, display: newResult }
            }
            else if ( operator === firstOperand) {    
                console.log(`her1e`);                            
                 newResult = operation(Number(display),memory, firstOperand)
                return {...state, display: `0`, memory: newResult, firstOperand: firstOperand, show: false }
            } else {       
                console.log(`here`);                      
                newResult = operation(Number(display),memory, firstOperand)
                return {...state, display: `0`, memory: newResult, firstOperand: operator, show: false }
            }    
        }
        case SHOW_RESULT: {
            let {display, memory, firstOperand,show} = state
            const newResult = operation(Number(display),memory, firstOperand)?.toString()
            if ( !firstOperand || show) {
                return state
            } 
            return {...state, display: newResult, memory: Number(newResult),firstOperand: null, show: true}
        }
        default:
            return state
    }
}
export const getUsersSelector = (state: Root) => state.calculator

export default calculatorReducer