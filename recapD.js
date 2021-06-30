// x = "Dixant";

// console.log("My message");

// console.log(x);

// let x = 12;
// let y = 3;

// console.log(
//   "Value of x: " + x + ", Value of y: " + y + ", and " + x + "/" + y + " = ",
//   +(x / y)
// );

// console.log(`Value of x: ${x}, Value of y: ${y}, and ${x}/${y} = ${x / y}`);

// console.log(`Value of x : ${x}`);
// console.log("Value of x : " + x);

// // Conditional Statements
// let age = 10;
// if (age > 18) {
//   console.log("You can vote!");
// } else {
//   console.log("You cannot vote right now.");
// }

// Functions
// function print_sum(a, b) {
//   console.log(`a: ${a}`);
//   console.log(`b: ${b}`);

//   console.log(`a + b = ${a + b}`);
// }

// print_sum(2, 3);

// function add(a, b) {
//   return a + b;
// }

// var sum = add(2, 3);

// console.log(`Sum: ${sum}`);

// // anonymous functions
// var function_to_print_sum = function (a, b) {
//   console.log("a + b = " + (a + b));
// };

// Arrow functions
// var function_to_print_sum = (a, b) => {
//   console.log("a + b = " + (a + b));
// };

// function_to_print_sum(4, 4);
function add(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

function print_after_operation(a, b, operation) {
  var result = operation(a, b);
  console.log("Result: " + result);
}

print_after_operation(3, 4, add);
print_after_operation(3, 4, product);
print_after_operation(3, 4, (a, b) => {
  return a - b;
});
