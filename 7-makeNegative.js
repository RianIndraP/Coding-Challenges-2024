// WPU Coding Challenge 2024
// 7/366
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// // 1. Function Declaration
//   function makeNegative(num) {
//     return num < 0 ? num : -num;
//   }

// 2. Function Expression
  // const makeNegative = function (num) {
  //   return num < 0 ? num : -num
  // }

// 3. Arrow Function
  // const makeNegative = num => num < 0 ? num : -num;

// 4. Lebih Singkat
  // makeNegative = num => num < 0 ? num : -num

// 5. Cara Lain
  makeNegative = num => -Math.abs(num)

console.log(makeNegative(10))
console.log(makeNegative(-10))