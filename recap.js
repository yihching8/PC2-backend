//let x = 12.0;

//x = "Dixant";

//console.log("My message");

//console.log(x);

//let x=12;
//let y=3;
//console.log(
//    "Value of x: " + x + ", Value of y: " + y + ", and " + x + "/" + y + " = ",
 //   +(x / y));
//console.log(`value of x: ${x}, value of y: ${y}, and ${x}/${y} = ${x/y}`);


//console.log(`value of x : ${x}`);
//console.log("value of x :" + x);

// Conditional statements 
//let age = 10;
//if(age >18){
//    console.log("You can vote!");
//} else{
//    console.log("You cannot vote right now");
//}
//Functions name(parameters)
//function print_sum(a,b){
//    console.log(`a: ${a}`);
//    console.log(`b: ${b}`);
//    console.log(`a + b = ${a + b}`);
//}
//Call function
//print_sum(2,3);

//function add(a,b) {
//    return a + b;
//}

//var sum = add(2,3);
//console.log(`Sum: ${sum}`);

//anonymous functions
// var function_to_print_sum = function (a,b){
//     console.log ("a + b=" + (a + b));
// };

// function_to_print_sum(4,4);

//Arrow Functions
//var function_to_print_sum = (a,b) => {
//     console.log ("a + b =" + (a + b));
// }
// function_to_print_sum(4, 4);

// "operation" is a call back function which is passed as a parameter
// function print_after_operation (a,b,operation){
//     var result = operation (a,b);
//     console.log ("Result: " + result);
// }

// function add(a,b) {
//     return a + b;
// }

// function product (a,b){
//     return a * b;
// } 

// print_after_operation (3, 4, add)
// print_after_operation (3, 4, product)
// print_after_operation (3, 4, (a, b) => {
//     return a-b;
// });


// "operation" is a call back function which is passed as a parameter
function add(a,b) {
    return a + b;
}

function product (a,b){
    return a * b;
} 

function print_after_operation (a,b,operation){
    var result = operation (a,b);
    console.log ("Result: " + result);
}

print_after_operation (3, 4, add)
print_after_operation (3, 4, product)
print_after_operation (3, 4, (a, b) => {
    return a-b;
});



