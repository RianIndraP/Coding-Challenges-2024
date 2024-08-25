// WPU Challenge 2024
// 11/366

// 1. Function Declaration
    // function boolToWord( bool ){
    //     return bool ? "Yes" : "No"
    // }

// 2. Function Expression
    // const boolToWord = function (bool) {
    //     return bool ? "Yes" : "No"
    // }

// 3. Arrow Function
    const boolToWord = b => b ? "Yes" : "No";

console.log(boolToWord(true))
console.log(boolToWord(false))