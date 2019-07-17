"use strict";
exports.__esModule = true;
var msg = function () {
    return "hello world";
};
var res = function (a, b) {
    return a * b;
};
// Function with constructor
var myFunction = new Function("a", "b", "return a + b");
var x = myFunction(4, 3);
// Functions as Lambda Expression
var foo = function (x) {
    x = 10 + x;
    console.log(x);
};
var bar = function (y) {
    if (y != 0) {
        y = 1 / y;
        console.log(y);
    }
    else {
        console.log("ERROR: Division by 0 nor allowed!!!");
    }
};
// Recursive function
function factorial(n) {
    if (n <= 0) { // termination case
        return 1;
    }
    else {
        return (n * factorial(n - 1)); // function invokes itself
    }
}
;
function disp(x, y) {
    console.log(x);
    console.log(y);
}
// Output
console.log(msg());
console.log("Product: " + res(12, 2));
console.log("myFunction: " + x);
console.log("n!: " + factorial(6));
foo(100);
bar(15);
disp("abc");
disp(1, "xyz");
