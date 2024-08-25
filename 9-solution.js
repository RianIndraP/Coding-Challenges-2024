// WPU Coding Challenge
// 8/366
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// 1. Function Declaration
    // function solution(str){
    //     return str.split('').reverse().join('');
    // }

// 2. Function Expression
    // const solution = function(str){
    //     return str.split('').reverse().join('');
    // }

// 3. Arrow Function
    // const solution = str => str.split('').reverse().join(''); 

// 4. Cara Lain 
    const solution = s => [...s].reverse().join('');

console.log(solution(world));
console.log(solution(hello));