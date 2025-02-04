// 1;
var fstr = 'bleson';
var lstr = 'philip';
var fullname = `my name is ${fstr} ${lstr}`;

console.log(fullname);

// 2;
var str = 'bleson';
var length = str.length;

console.log(str);

console.log(length, ' length of string');

// 3;
var f = 'bleson';

console.log(f);

var res = f.toUpperCase();

console.log(res);

// 4;
var number = 10;
if (number % 5 == 0) {
  console.log(number, 'is a multiple of 5');
} else {
  console.log('the number is not multiple of 5');
}

// 5;
var n = 10;
if (n > 50 && n < 100) {
  console.log('The number is between 50 and 100', n);
} else {
  console.log(n, 'the number is not between 50 and 100');
}

// 7;
var String = 'Bleson ';
if ([String.length - 1] > 10) {
  console.log(String, ' has more than 10 characters');
} else {
  console.log(String, 'less than 10 character');
}

// 8;
var fstr = 'bleson';
var sstr = 'bleson';
if (fstr == sstr) {
  console.log('the two string are equal');
} else {
  console.log('the two string are not equal');
}

// 9;
var n1 = 10;
var n2 = 20;
var n3 = 20;

var res = n1 + n2 + n3;
var avg = res / 3;
console.log('average of 3 no.s', avg);

//10
var a = 10;
var b = 12;
if (a < b) {
  console.log(a, 'is less than', b);
} else {
  console.log(b, 'is less than', a);
}

//11
var a = 10;
var b = 12;
if (a > b) {
  console.log(a, 'is greater than', b);
} else {
  console.log(b, 'is greater than', a);
}
//12
var strings = '';
if (strings.length == 0) {
  console.log('string is empty');
} else {
  console.log('string is not empty');
}
