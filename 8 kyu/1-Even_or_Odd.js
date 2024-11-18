// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
// Buat fungsi yang mengambil bilangan bulat sebagai argumen dan mengembalikan "Even" untuk bilangan genap atau 
// "Odd" untuk bilangan ganjil.

// function evenOrOdd(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
// }

const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd";

console.log(evenOrOdd(10)); 
console.log(evenOrOdd(11));