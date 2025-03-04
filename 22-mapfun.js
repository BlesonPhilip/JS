var number = [1, 2, 3, 4, 5];
// var makeDouble = x => {
//   return x + x;
// };
// var double = number.map(makeDouble);

var makeDouble = x => x + x;
var double = number.map(x => x + x);
console.log(double);
