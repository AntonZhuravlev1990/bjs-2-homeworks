//Задача 1
function getArrayParams(...arr) {
    if (arr.length === 0) {
        return { min: 0, max: 0, avg: 0 };
    }
    
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        
        if (arr[i] > max) {
            max = arr[i];
        }
        
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    let avg = sum / arr.length;
    avg = Number(avg.toFixed(2));
    return { min: min, max: max, avg: avg };
}

//Задача 2
function summElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    let max = arr[0];
    let min = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    let sumEven = 0;  // сумма чётных
    let sumOdd = 0;   // сумма нечётных
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven = sumEven + arr[i];
        } else {
            sumOdd = sumOdd + arr[i];
        }
    }
    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sumEven = 0;   // сумма чётных
    let countEven = 0; // количество чётных
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven = sumEven + arr[i];
            countEven = countEven + 1;
        }
    }
    if (countEven === 0) {
        return 0;
    }
    
    return sumEven / countEven;
}

//Задача 3
function makeWork(arrOfArr, func) {
    if (arrOfArr.length === 0) {
        return 0;
    }
    
    let maxResult = -Infinity;
    
    for (let i = 0; i < arrOfArr.length; i++) {
        let result = func(...arrOfArr[i]);
        
        if (result > maxResult) {
            maxResult = result;
        }
    }
    
    return maxResult;
}
