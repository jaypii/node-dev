var person = {
    firstname: "Tom",
    lastname: "Hanks",
    sayHello: function () { } //Type template 
};
person.sayHello = function () {
    console.log("Hello " + person.firstname);
};
//access the object values 
console.log(person.firstname + " " + person.lastname);
console.log("");
person.sayHello();
console.log("");
console.log("--- Objects as function parameters ---");
var invokeperson = function (obj) {
    console.log("first name:\t" + obj.firstname);
    console.log("last name:\t" + obj.lastname);
};
invokeperson(person);
console.log("\n--- Example: Anonymous Object ---");
invokeperson({ firstname: "Sachin", lastname: "Tendulkar" });
console.log("\n--- Duck-typing ---");
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
//Valid 
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
//--> Error 
//var newPoint2 = addPoints({x:1},{x:4,y:3})
var newPoint2 = addPoints({ x: 1, y: -5 }, { x: 4, y: 3 });
console.log(newPoint);
console.log(newPoint2);
