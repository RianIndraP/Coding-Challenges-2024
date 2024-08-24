// WPU Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// 1. Name Function Declaration
    // function reverseSeq(n) {
    //     let arr = [];
    //     for (let i = n; i > 0; i--){
    //         arr.push(i);
    //     }
    //     return arr;
    // }

// 2. Anonymou Function Expression
    // const reverseSeq = function (n) {
    //     let arr = [];
    //     for (let i = n; i > 0; i--) {
    //         arr.push(i);
    //     }
    //     return arr;
    // }

// 3. Arrow Function 
    const reverseSeq = (n) => {
        let arr = [];
        for (let i = n; i > 0; i--) {
            arr.push(i);
        }
        return arr;
    }

console.log(reverseSeq(6))
