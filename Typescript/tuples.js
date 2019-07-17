var mytuple = [10, "Hello"]; //create a  tuple
console.log("--- Simple Tuple ---");
console.log(mytuple[0] + ": " + mytuple[1]);
console.log("--- Empty Tuple ---");
var tup = [];
tup[0] = 12;
tup[1] = 13;
console.log(tup[0] + " " + tup[1]);
console.log("--- Tuple Ops --");
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length); // returns the tuple size 
mytuple.push(12); // append value to the tuple 
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple"); // removes and returns the last item
console.log("Items after pop " + mytuple.length);
console.log("--- Updating tuples ---");
var mytuple = [10, "Hello", "World", "typeScript"]; //create a  tuple 
console.log("Tuple value at index 0: " + mytuple[0]);
//update a tuple element 
mytuple[0] = 121;
console.log("Tuple value at index 0 changed to " + mytuple[0]);
console.log("--- Destructuring a tuple ---");
var a = [10, "hello"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
