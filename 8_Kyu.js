// 1. Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
// Buat fungsi yang mengambil bilangan bulat sebagai argumen dan mengembalikan "Even" untuk bilangan genap atau "Odd" untuk bilangan 
// ganjil.

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

// 6. Convert number to string
// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
// Kita membutuhkan fungsi yang dapat mengubah angka (bilangan bulat) menjadi string.
// Cara apa untuk mencapai ini yang Anda tahu?
// Contoh (input --> output):
// 123 --> "123"
// 999 --> "999"
// -100 --> "-100"

// function numberToString(num) {
//     return num.toString();
// }

numberToString = num => num.toString();

console.log(numberToString(123));
console.log(numberToString(-100));

// 7. Convert boolean to string
// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
// Selesaikan metode yang mengambil nilai boolean dan kembalikan string "Yes" untuk true, atau string "No" untuk false.

// function boolToWord(bool) {
//     return bool ? "Yes" : "No";    
// }

boolToWord = bool => bool ? "Yes" : "No";

console.log(boolToWord(true));
console.log(boolToWord(false));

// 8. Opposite number
// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript
// Sangat sederhana, diberikan angka (bilangan bulat / desimal / keduanya tergantung pada bahasanya), temukan kebalikannya (kebalikan 
// aditif).
// Contoh:
// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//     return -number;
// }

opposite = number => -number;

console.log(opposite(1));
console.log(opposite(-34));

// 9. Jumlah Kuadrat
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// Lengkapi fungsi jumlah kuadrat sehingga mengkuadratkan setiap angka yang dimasukkan ke dalamnya dan kemudian menjumlahkan hasilnya bersama-sama.

// Misalnya, untuk [1, 2, 2] seharusnya mengembalikan 9 karena 
// 1^2 + 2^2 + 2^2 = 9.

// function squareSum(numbers) {
//     return numbers.reduce((a, b) => a + b ** 2, 0);
// }

squareSum = numbers => numbers.reduce((a, b) => a + b ** 2, 0);

console.log(squareSum([1, 2, 2]));
console.log(squareSum([0, 3, 2, 2]));

// 10. Remove First and Last Character
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// Ini cukup mudah. Tujuan Anda adalah membuat fungsi yang menghapus karakter pertama dan terakhir dari string. Anda diberi satu 
// parameter, string asli. Anda tidak perlu khawatir tentang string dengan kurang dari dua karakter.

// function removeChar(str) {
//     return str.slice(1, -1);
// };

removeChar = str => str.slice(1, -1);

console.log(removeChar('world')); 
console.log(removeChar('country'));