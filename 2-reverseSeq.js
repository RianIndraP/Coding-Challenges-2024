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