// for (var i = 1; i < 11; i++) {
//   console.log(i);
// }

// for (var i = 10; i > 0; i--) {
//   console.log(i);
// }

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }
// console.log('sum of even numbers from 1 to 10 is  :', sum);

// var fact = 1;
// var n = 6;

// for (var i = 1; i <= n; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// var pattern = '';
// var n = 5;
// for (var i = 1; i <= n; i++) {
//   pattern = pattern + '*' + '\n';
// }
// console.log(pattern);

let n = 5; // You can change the value of n to control the size of the triangle
let stars = '';

for (let i = 1; i <= n; i++) {
  stars += '*';
  console.log(stars);
}
