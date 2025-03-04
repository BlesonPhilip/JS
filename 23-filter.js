var numbers = [1, 2, 3, 4, 5, 6, 7];

// var filterfunction = x => {
//   if (x % 2 == 0) return true;
//   else return false;
// };

// var filterfunction = x => {
//   return x % 2 == 0;
// };

// var filterfunction = x => x % 2 == 0;

var evenArray = numbers.filter(x => x % 2 == 0);
console.log(evenArray);
