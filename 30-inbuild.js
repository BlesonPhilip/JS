const printHello = () => {
  console.log("hello");
};

const id = setTimeout(printHello, 5000);

clearTimeout(id);
