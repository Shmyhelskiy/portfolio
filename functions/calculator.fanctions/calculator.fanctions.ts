const adding = (x:number, y:number) =>  x + y;
const subtraction = (x:number, y:number) =>  x - y;
const multiplication =(x:number, y:number) =>  x * y;
const division = (x:number, y:number) =>  x / y;
const percentageOf = (x:number, y:number) =>  ( y / 100) * x;
const pow = (x:number, y:number) => Math.pow(x,y)
const sqrt = (x:number) =>  Math.sqrt(x)

export const operation = (display: number, memory: number, operator: string | null) => {
    if (operator === null) {
        return memory    
    }
    switch(operator) {
        case "sum": 
            return adding(display, memory)
        case "subtraction":
            return subtraction(memory, display)
        case "multiplication":
            return multiplication(memory, display)
        case "division":
            return division(memory, display)
        case "percentageOf":
            return percentageOf(memory, display)
        case "pow":
            return pow(memory, display)
        case "sqrt":
            return sqrt(display)
    }
}

