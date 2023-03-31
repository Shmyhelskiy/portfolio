type Root = {
    calculator: calculatorState
}
type calculatorState = {
    display: string;
    firstOperand: string | null;
    waitingForSecondOperand: boolean;
    memory: number;
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
