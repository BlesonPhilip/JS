console.log("Start");
console.log("Start 2");
console.log("Start 3");

// fetch("https://fakestoreapi.com/products").then((r) => {
//   r.json().then((data) => {
//     console.log(data);
//   });
// });

fetch("https://fakestoreapi.com/products")
  .then((r) => r.json())
  .then((data) => console.log(data));

console.log("End");
