try {
  console.log("Start");
  console.log(Start2);
  console.log("Start");
} catch (error) {
  console.log(error.message);
}
console.log("End");
// The error is caught and the message is printed, but the program continues to run.
// The output is:

// Start
// ReferenceError: Start2 is not defined
// End
