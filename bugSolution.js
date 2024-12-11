function myFunction(a, b) {
  //Check if inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Arguments must be numbers";
  }
  return a - b;
}

console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction("10", 5)); // Output: Invalid input: Arguments must be numbers