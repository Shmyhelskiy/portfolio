export const CHANGE_COMPLEATE = "CHANGE_COMPLEATE";
export const CREATE_STATE_MONEY = "CREATE_STATE_MONEY";
export const TAKE_DATA_MONAY = "TAKE_DATA_MONAY";
export const RESET_MONEY_STATE = "RESET_MONEY_STATE";

export const changeCompleate  = () => {
    return {
        type: CHANGE_COMPLEATE,
    }
}

export const createStateMoney = () =>{
    return {
        type: CREATE_STATE_MONEY,
    }
}

export const takeDataMoney = (dataMoney:DataMoney) => {
    return {
        type: TAKE_DATA_MONAY,
        dataMoney: dataMoney,
    }
}

export const resetMoneyState = () => {
    return {
        type: RESET_MONEY_STATE
    }
} 