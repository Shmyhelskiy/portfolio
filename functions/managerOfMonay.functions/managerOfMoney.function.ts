export const checkData = (salary: number, livingExpenses: number, savings: number ) => {
    isNaN(livingExpenses) ?  livingExpenses = 0 : livingExpenses;
    isNaN(savings) ?  savings = 0 : savings;
    if ( livingExpenses === 0  && savings === 0 && salary === 0) {
        return false
    }
    if (livingExpenses  + savings > salary || livingExpenses  + savings !== salary ) {
        return false
    }
    return true
}

export const takeProsent = (dataMoney: DataMoney) => {
    const cloneData = dataMoney;
    cloneData.livingExpenses = Math.round((dataMoney.livingExpenses * 100) / dataMoney.salary);
    cloneData.savings = Math.round(100 - cloneData.livingExpenses); 
    return cloneData
}

export const takePeriodOfTime = (period:number) =>{
    const year = new Date().getFullYear()
    return Array(period).fill(0).map((item, id) => item = year + id)
}

export const calculateTheSavings = (salary:number, savings: number, period: number, rate: number) =>{
    const partOfSalary = salary * savings / 100

    const takeProsent  = (money: number, rate: number) =>{
        return money * rate / 100
    }

    const result = Array(period);
    for (let i = 0; i < period; i++) {
        i === 0 ?  result[i] = partOfSalary + takeProsent(partOfSalary, rate) 
        :
        result[i] = result[i-1] + takeProsent(result[i-1], rate)
    }
    
    return result
}