interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
}

var customer:IPerson = { 
    firstName: "Tom",
    lastName: "Hanks", 
    sayHi: ():string => {return "Hi there"} 
}

interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
} 

console.log("Customer Object\n------------------------------") 
console.log(customer.firstName + " " + customer.lastName) 
console.log(customer.sayHi())

var employee:IPerson = { 
    firstName: "Jim",
    lastName: "Blakes", 
    sayHi: ():string => {return "Hello!!!"} 
}
console.log("") 
console.log("Employee  Object\n-----------------------------") 
console.log(employee.firstName +" "+ employee.lastName)

console.log("----- Union Type and Interface -----")
//commandline as string 
var options:RunOptions = {program:"test1",commandline:"Hello"}; 
console.log(options.program + "> " + options.commandline)  

//commandline as a string array 
options = {program:"test1",commandline:["Hello","World"]}; 
console.log(options.commandline[0]); 
console.log(options.commandline[1]);  

//commandline as a function expression 
options = {program:"test1",commandline:()=> {return "***Hello World***";}}; 

var fn:any = options.commandline; 
console.log(fn());

console.log("----- Interfaces and Inheritance -----")
interface Person { 
    age:number 
}

interface Musician extends Person { 
    instrument:string 
 }
 
var drummer = <Musician>{}; 
drummer.age = 27 
drummer.instrument = "Drums" 
console.log("Age:  "+drummer.age); console.log("Instrument:  "+drummer.instrument)