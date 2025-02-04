var person = {
  name: 'bleson',
  lname: 'philip',
  age: 25,
};

var { age, name, lname } = person;
var { age, name, lname, car = 'bmw' } = person;

console.log(age);
console.log(car);
