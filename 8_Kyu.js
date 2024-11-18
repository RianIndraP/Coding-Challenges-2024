// 1. Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
// Buat fungsi yang mengambil bilangan bulat sebagai argumen dan mengembalikan "Even" untuk bilangan genap atau 
// "Odd" untuk bilangan ganjil.

// function evenOrOdd(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
// }

// const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd";

evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd";

console.log(evenOrOdd(10));
console.log(evenOrOdd(11));

// 2. Multiply
// https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript
// Kode ini tidak dijalankan dengan benar. Cobalah untuk mencari tahu alasannya.

// function multiply(a, b) {
//     return a * b
// }

// const multiply = (a, b) => a * b;

multiply = (a, b) => a * b

console.log(multiply(10, 5));
console.log(multiply(5, 5));

// 3. Make negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// Dalam tugas sederhana ini Anda diberi angka dan harus membuatnya negatif. Tapi mungkin jumlahnya sudah negatif?

// function makeNegative(num) {
//     return -Math.abs(num);
// }

makeNegative = num => -Math.abs(num);

console.log(makeNegative(10));
console.log(makeNegative(-5));

// 4. Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// Anda mendapatkan array angka, mengembalikan jumlah dari semua angka positif.
// Contoh [1,-4,7,12] => 1 + 7 + 12 = 20
// Catatan: jika tidak ada yang bisa dijumlahkan, jumlahnya default menjadi 0.

// function positiveSum(arr) {
//     return arr.filter(num => num > 0).reduce((a, b) => a + b, 0);
// }

positiveSum = arr => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);

console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -2, -3, -4]));

// 5. Reverse String
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
// Selesaikan solusi sehingga membalikkan string yang diteruskan ke dalamnya.
// 'world' => 'dlrow'
// 'word' => 'drow'

// function solution(str) {
//     return str.split('').reverse().join('');
// }

// solution = str => str.split('').reverse().join('');

solution = str => [...str].reverse().join('');

console.log(solution('world')); 
console.log(solution('word'));