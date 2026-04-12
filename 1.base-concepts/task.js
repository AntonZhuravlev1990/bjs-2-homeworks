"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
 let d = b ** 2 - 4 * a * c;

    if (d < 0) {

        return arr;
    } else if (d === 0) {
        
        let root = -b / (2 * a);
        arr.push(root);
    } else {
      
        let root1 = (-b + Math.sqrt(d)) / (2 * a);
        let root2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(root1, root2);
    }

    return arr;
}

// Задача 2: Калькулятор ипотеки
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    
    let percentNum = Number(percent);
    let contributionNum = Number(contribution);
    let amountNum = Number(amount);
    let countMonthsNum = Number(countMonths);

    
    if (isNaN(percentNum) || isNaN(contributionNum) ||
        isNaN(amountNum) || isNaN(countMonthsNum)) {
        return false;
    }

    
    let creditBody = amountNum - contributionNum;
    if (creditBody <= 0) {
        return 0;
    }

    
    let p = percentNum / 100 / 12; 

    
    let monthlyPayment = creditBody * (p + (p / (Math.pow(1 + p, countMonthsNum) - 1)));

    
    let totalPayment = monthlyPayment * countMonthsNum;

   
    totalPayment = Math.round(totalPayment * 100) / 100;

    return totalPayment;
}


function testCase() {
    
    console.log("Тесты для solveEquation:");
    console.log("solveEquation(1, 5, 4):", solveEquation(1, 5, 4)); // [-1, -4]
    console.log("solveEquation(1, 2, 1):", solveEquation(1, 2, 1)); // [-1]
    console.log("solveEquation(1, 1, 1):", solveEquation(1, 1, 1)); // []

    
    console.log("\nТесты для calculateTotalMortgage:");
    console.log("calculateTotalMortgage(10, 0, 50000, 12):", calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
    console.log("calculateTotalMortgage(10, 1000, 50000, 12):", calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
    console.log("calculateTotalMortgage(10, 0, 20000, 24):", calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
    console.log("calculateTotalMortgage(10, 1000, 20000, 24):", calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
    console.log("calculateTotalMortgage(10, 20000, 20000, 24):", calculateTotalMortgage(10, 20000, 20000, 24)); // 0
    console.log("calculateTotalMortgage(10, 0, 10000, 36):", calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
    console.log("calculateTotalMortgage(15, 0, 10000, 36):", calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52
}