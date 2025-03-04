console.log("Start");
console.log("Start 2");
console.log("Start 3");

const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
};

fetchData();
console.log("end");
