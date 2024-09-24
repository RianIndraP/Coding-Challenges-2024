// WPU Coding Challenge 2024
// 1/366 | 7 Kyu
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// function highAndLow(numbers) {
//     const numArray = numbers.split(' ').map(Number);
//     const highest = Math.max(...numArray);
//     const lowest = Math.min(...numArray);
//     return `${highest} ${lowest}`;
// }

const highAndLow = numbers => {
    const numArray = numbers.split(' ').map(Number);
    return `${Math.max(...numArray)} ${Math.min(...numArray)}`;
};


// Example usage:
console.log(highAndLow("1 2 3 4 5"));   // Output: "5 1"
console.log(highAndLow("1 2 -3 4 5"));  // Output: "5 -3"
console.log(highAndLow("1 9 3 4 -5"));  // Output: "9 -5"
