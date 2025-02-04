console.log('prime or not \n');
let num = 11;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (num < 2) {
  isPrime = false; // Numbers less than 2 are not prime
}

if (isPrime) {
  console.log(num + ' is a prime number.');
} else {
  console.log(num + ' is not a prime number.\n');
}

console.log('\n');

console.log('fibonacci series of', num);
let num1 = 10;
let a = 0,
  b = 1;

console.log(a);
for (let i = 1; i < num1; i++) {
  console.log(b);
  let c = a + b;
  a = b;
  b = c;
}
console.log('\n');

// let numTerms = 10; // Number of terms
// let a = 0,
//   b = 1;
// let sum = a + b;

// for (let i = 2; i < numTerms; i++) {
//   let nextTerm = a + b;
//   sum += nextTerm;
//   a = b;
//   b = nextTerm;
// }

// console.log('Sum of Fibonacci series:', sum);

console.log('palindrome or not \n');

var str = 'malayalam';
var resstr = '';
for (var i = str.length - 1; i >= 0; i--) {
  resstr = resstr + str[i];
}
if (str == resstr) {
  console.log(str, 'is a palindrome');
} else {
  console.log(str, 'is not a palindrome');
}
