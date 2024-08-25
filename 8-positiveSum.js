// WPU Coding Challenge 2024
// 7/366
// https://www.codewars.com/kata/5715eaedb436cf5606000381

// 1. Function Declaration
    // function positiveSum(arr) {
    //     const positive = arr.filter(num => num > 0)
    //     let sum = 0
    //     positive.forEach(num => sum += num);
    //     return sum;
    //     ;
    // }

// 2. Function Expression
    // const positiveSum = function (arr) {
    //     const positive = arr.filter(num => num > 0)
    //     let sum = 0
    //     positive.forEach(num => sum += num);
    //     return sum;
    // }

// 3. Arrow Function
    // const positiveSum = arr => {
    //     const positive = arr.filter(num => num > 0)
    //     let sum = 0
    //     positive.forEach(num => sum += num);
    //     return sum;
    // }

// 4. Lebih Singkat
    // const positiveSum = arr => arr.reduce((a, b) => b > 0 ? a + b : b, 0)

// 5. Cara Lain
    const positiveSum = arr => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)

console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));