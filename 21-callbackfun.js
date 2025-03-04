// var myfun = x => {
//   console.log(x);
// };
// myfun(4);
// myfun('helo');

// var myfunc = x => {
//   console.log(x);
// };
// var printHello = () => {
//   console.log('hello');
// };
// myfunc(printHello);

var myfun = x => {
  x();
};
var printHello = () => {
  console.log('hello');
};
myfun(printHello);

// var myfun = x => {
//   x();
// };

// myfun(() => {
//   console.log('hello');
// });

var myfun = (x, y) => {
  x(y);
};

var abc = a => {
  console.log('apple', a);
};

myfun(abc, 'is a fruit');
