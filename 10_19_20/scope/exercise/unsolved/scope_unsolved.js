/*
 Create a script that does the following:
 • declares and assigns a global variable to an integer
• defines a function that contains a local variable and returns
the value of that local variable + the global variable
• finally, calls the function and prints out its return value
PS !!!!  (local variables are defined inside a function wheras global variables are defined outside a function.)
*/
var globalV = 21;
function assign(){
    localV = prompt("pick a number");
    alert("The local variable is " + localV);
};

console.log(assign());
console.log(globalV);
console.log(localV);
alert("The global variable is " + globalV + ".");


