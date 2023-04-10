// Root 
type Root = {
    calculator: calculatorState;
    flashCard: NumbersState;
}

// Calculator types
type calculatorState = {
    display: string;
    firstOperand: string | null;
    waitingForSecondOperand: boolean;
    memory: number;
    show: boolean;
};

type CalculatorAction = {
    type: string,
    payload: {
        display: string;
        number: string;
        operator: string,
        firstOperand?: string,
    }
}

type numberAction = {
    type: string,
    payload: {
        number: string,
    }
}

type operationAction = {
    type: string,
    payload: {
        operator: string,
    }
}

// FlashCards types

type NumbersState = {
    mathState: mathState, 
    score: number,
    attempts: number,
    }
    
type NumberAction = {
        type: string,
        number: number,
    }

type mathState = {
        numbers: number[][],
        numberA: null | number,
        numberB: null | number,
        answer: number,
        isRight:  boolean | undefined
    }