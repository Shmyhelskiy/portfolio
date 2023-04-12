// Root 
type Root = {
    calculator: calculatorState;
    flashCard: NumbersState;
    ToDo: ToDoState;
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

// TO-Do types 

type ToDoState = {
    ToDo: ToDo[],
    Done: ToDo[],
    counter: number,
}

type ToDoAction = {
    Post: any;
    type: string,
    payload: {
        Post: Post;
    };
}
type numberAction = {
    type: string,
    payload: {
        number: string,
    }
}

type Post = {
    Title: string,
    isDone: boolean,
    id: number,
}

