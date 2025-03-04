// Write a JavaScript program that filters out even numbers from an array
//  using the filter()
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

// Write a JavaScript program that filters out strings containing 'a' from an
//  array using filter()

var str = ['apple', 'ant', 'bleson'];
var ne = str.filter(x => !x.includes('a'));
console.log(ne);
