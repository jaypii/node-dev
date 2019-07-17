var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object\n------------------------------");
console.log(customer.firstName + " " + customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("");
console.log("Employee  Object\n-----------------------------");
console.log(employee.firstName + " " + employee.lastName);
console.log("----- Union Type and Interface -----");
//commandline as string 
var options = { program: "test1", commandline: "Hello" };
console.log(options.program + "> " + options.commandline);
//commandline as a string array 
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
//commandline as a function expression 
options = { program: "test1", commandline: function () { return "***Hello World***"; } };
var fn = options.commandline;
console.log(fn());
console.log("----- Interfaces and Inheritance -----");
var drummer = {};
drummer.age = 27;
drummer.instrument = "Drums";
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);
