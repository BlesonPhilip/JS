// Create a program that converts an array of strings to uppercase
//  using map().

var arr1 = ['apple'];
var upper = arr1.map(x => x.toUpperCase());
console.log(upper);

// Write a JavaScript program that extracts the lengths of strings in an
//  array using map()

// var str = ['apple'];
// var len = str.map(x => x.length);
// console.log(len);

var strings = ['apple', 'banana', 'cherry'];
var lengths = strings.map(str => str.length);
console.log(lengths); // Output: [5, 6, 6]

//Write a JavaScript program that adds a prefix "Hello, " to each
//element in an array using map()
var names = ['benny', 'bino'];
var add = names.map(x => 'hello,' + names);
console.log(add);
