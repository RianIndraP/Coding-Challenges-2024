// WPU Challenge 2024
// 14/366
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// 1. Function Declaration
    // function squareSum(numbers){
    //     let a = 0;
    //     for (let i = 0; i < numbers.length; i++) {
    //         a += numbers[i] * numbers[i]
    //     }
    //     return a;
    // }

// 2. Function Expression
    // const squareSum = function (numbers) {
    //     return numbers.reduce(function (a, b) {
    //         return a + b * b
    //     }, 0)
    // }

// 3. Arrow Function
    // squareSum = number => number.reduce((a, b) => a + b * b, 0);

// 4. Cara Lain 
    const squareSum = numbers => numbers.reduce((a,b) => a + Math.pow(b, 2), 0)

console.log(squareSum([1,2,2]));