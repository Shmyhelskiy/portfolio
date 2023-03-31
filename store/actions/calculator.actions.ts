export const RESET_DISPLAY = "clearDisplay";
export const ADD_NUMBER = "addNumber"
export const DECIMAL = "decimal"
export const MATHOPERATION = "mathoOeration"
export const SHOW_RESULT = "showResult"

export const Clear = () => {
    return {
        type: RESET_DISPLAY,
    }
}
export const addNumber = (number: string): numberAction =>{
    return {
        type: ADD_NUMBER,
        payload: { number }
    }
}

export const addPoint = () =>{
    return {
        type: DECIMAL,
    }
}

export const operation = (operator: string): operationAction =>{
    return {
        type: MATHOPERATION,
        payload: { operator }
    }
}


export const showResult = () =>{
    return {
        type: SHOW_RESULT,
    }
}
