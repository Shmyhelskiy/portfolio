type Root = {
    calculator: calculatorState
}
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
