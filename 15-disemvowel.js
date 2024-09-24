// WPU Challenge 2024
// 15/366
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  return str.replace(/[aiueoAIUEO]/g, '');
}

console.log(disemvowel("This website is for losers LOL!"));