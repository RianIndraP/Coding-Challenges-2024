// WPU Coding Challenge 2024
// 5/366
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// 1. Function Declaration 
    // function evenOrOdd(number) {
    //     if ( number % 2 === 0) {
    //         return "Even";
    //     } else {
    //         return "Odd";
    //     }
    // }

// 2. Function Expression 
    // const evenOrOdd = function(number) {
    //     return number % 2 === 0 ? "Even" : "Odd";
    // }

// 3. Arrow Function 
    const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd";

console.log(evenOrOdd(10))