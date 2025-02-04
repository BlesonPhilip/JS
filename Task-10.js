// Write a function in JavaScript that takes two numbers as
//  parameters and returns their sum.

function sum(n1, n2) {
  return n1 + n2;
}

let res = sum(3, 3);
console.log('sum is', res);

// Create a function that takes an array of numbers as an argument
//  and returns the largest number in the array.

function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let numbers = [1, 5, 3, 10, 2];
let largestNumber = findLargestNumber(numbers);
console.log('Largest number:', largestNumber); // Output: Largest number: 9

// Create a function that takes a string as input and returns the
//  number of vowels in the string.

function countVowels(str) {
  let count = 0;
  const vowels = 'aeiouAEIOU';

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
let inputString = 'Hello, World!';
let vowelCount = countVowels(inputString);
console.log('Number of vowels:', vowelCount); // Output: Number of vowels: 3
