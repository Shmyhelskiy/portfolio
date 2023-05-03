import { CREATE_STATE_MONEY, RESET_MONEY_STATE, TAKE_DATA_MONAY } from "../actions/manager-of-money.actions"


const initialState:managerOfMoneyState  = {
    isCompleate: false,
    DataMoney: {
        salary: 0,
        livingExpenses: 0,
        savings: 0,
        savingsYears: 0,
        percentage: 0,
    }
}

const managerOfMoneyReducer = (state = initialState, action: managerOfMoneyAction ) => {
    switch (action.type) {
        case CREATE_STATE_MONEY:
            const lastStateString = localStorage.getItem("managerOfMoneyState");
            const lastState = lastStateString ? JSON.parse(lastStateString) : state;
            return lastState;

        case TAKE_DATA_MONAY: 
            const newDataMoney = action.dataMoney
            localStorage.setItem("managerOfMoneyState", JSON.stringify({ ...state, DataMoney: newDataMoney, isCompleate: true}));     
            return { ...state, DataMoney: newDataMoney, isCompleate: true};

        case RESET_MONEY_STATE: 
        localStorage.setItem("managerOfMoneyState", JSON.stringify(initialState));
        return initialState;

        default:
            return state
    }
}

export default managerOfMoneyReducer