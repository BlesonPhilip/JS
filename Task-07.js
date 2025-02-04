// Write a for loop to calculate the sum of all elements in an array

var arr = [1, 2, 3, 4];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  sum = sum + arr[i];
}
console.log('the sum of array is ', sum);

// Write a for loop to find the index of a specific element in an array.

var element = 4;
var array = [1, 2, 3, 4, 5];
var index = -1;
for (var i = 0; i < array.length; i++) {
  if (array[i] === element) {
    index = i;
  }
}
console.log(`the index of ${element} is ${index}`);

// Print all odd numbers from an array using a for loop.
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd = [];
for (var i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0) {
    odd.push(array[i]);
  }
}
console.log(odd);

// Create a new array that contains the square of each element from the
// original array using a for loop.

var arr1 = [1, 2, 3, 4];
var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * arr1[i]);
}

console.log(arr2);

// Create a new array that contains the square of each element from the
// original array using a for loop.

var arr = [1, 1, 2, 3, 4, 1, 1, 1];
var count = 0;
var f = 1;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === f) {
    count = count + 1;
  }
}
console.log(count);

// write a program to remove all occurrences of a specific element from an
// array
var arr = [1, 1, 2, 3, 4, 1, 1, 1];
var remove = 1;

var arr2 = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] !== remove) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);

// Find the largest number in an array using a for loop.

var arr = [1, 2, 4, 6, 8];
var lar = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > lar) {
    lar = arr[i];
  }
}
console.log('the largest number in the array is', lar);

// Write a for loop to reverse an array.

var array = ['apple', 'orange'];
var rev = [];
for (var i = array.length - 1; i >= 0; i--) {
  rev.push(array[i]);
}
console.log(rev);

// write a for loop to remove duplicates from an array.

var arr = ['apple', 'orange', 'apple'];
var uniq = [];

for (var i = 0; i < arr.length; i++) {
  if (!uniq.includes(arr[i])) {
    uniq.push(arr[i]);
  }
}
console.log('the array with uniq', uniq);

// write a program to find intersection of two arrays

var arr = [1, 2, 3, 4];
var arr2 = [1, 3, 7, 8];
var inte = [];
for (var i = 0; i < arr.length; i++) {
  if (arr2.includes(arr[i])) {
    inte.push(arr[i]);
  }
}
console.log(inte);

// write a for loop to sort a number array
var arr = [9, 8, 5, 4, 1, 2];
var temp;

for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log('The sorted array is ', arr);
