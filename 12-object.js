var person = {
  name: 'Bleson',
  lname: 'Philip',
  age: 25,
  place: 'kottayam',
};
// console.log(person);
// console.log(person.place);
// console.log(person['place']);

// var key = 'name';
// console.log(person[key]);

person.car = 'BMW';
// delete person.age;
// person.place = 'othera';
// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

console.log(person.hasOwnProperty('car'));

// for (var i in person) {
//   console.log(person[i]);
// }
