// WPU Challenge 2024
// 13/366
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// 1. Function Declaration
    // function removeChar(str){
    //     return str.slice(1, -1)
    // };

// 2. Function Expression
    // const removeChar = function (str) {
    //     return str.slice(1, -1)
    // }

// 3. Arrow Function
    // const removeChar = str => str.slice(1, -1)

// 4. Cara Lain
    const removeChar = s => s.substr(1, s.length -2)

// 5. Lebih Singkat 
    // removeChar = s => s.slice(1, -1)
    // removeChar = s => s.substr(1, s.length -2)

console.log(removeChar('eloquent'));