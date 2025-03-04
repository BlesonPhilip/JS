// Write a function to remove duplicates from an array.

function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

// Write a function to check if a given number is a prime number

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Example usage:
const number = 17;
console.log(isPrime(number)); // Output: true

// Write a function to reverse a string without using the built-in
// reverse() method.

function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Example usage:
const originalString = 'hello';
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "olleh"

// Write a function that accepts a string as a parameter and returns
// the most frequent character in the string.

function mostFrequentChar(str) {
  const charCount = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// Example usage:
const inputString = 'javascript';
const frequentChar = mostFrequentChar(inputString);
console.log(frequentChar); // Output: "a"

// Write a function that accepts a sentence as a parameter and
// returns the word with the highest number of vowels.

function wordWithMostVowels(sentence) {
  const words = sentence.split(' ');
  let maxVowelWord = '';
  let maxVowelCount = 0;

  for (let word of words) {
    let count = 0;
    for (let char of word) {
      if ('aeiouAEIOU'.includes(char)) {
        count++;
      }
    }
    if (count > maxVowelCount) {
      maxVowelCount = count;
      maxVowelWord = word;
    }
  }

  return maxVowelWord;
}

// Example usage:
const sentence = 'This is a beautiful day';

console.log(wordWithMostVowels(sentence)); // Output: "beautiful"

// Write a function to find the second smallest element in an array of
// numbers.
function secondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error('Array must contain at least two elements.');
  }

  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      second = arr[i];
    }
  }

  if (second === Infinity) {
    throw new Error('Array does not contain a second smallest element.');
  }

  return second;
}

// Example usage:
const array = [5, 3, 1, 4, 2];
const secondSmallestElement = secondSmallest(array);
console.log(secondSmallestElement); // Output: 2
