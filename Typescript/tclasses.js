"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Car = /** @class */ (function () {
    //constructor 
    function Car(engine) {
        this.engine = engine;
    }
    //function 
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle:  " + this.Area);
    };
    return Circle;
}(Shape));
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); //indirectly inherits from Root by virtue of inheritance
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("doPrint() from Parent called…");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("doPrint() is printing a string…");
    };
    return StringPrinter;
}(PrinterClass));
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is " + StaticMem.num);
    };
    return StaticMem;
}());
//create objects 
var obj = new Car("XXSY1");
var shp1 = new Circle(223);
var obj1 = new Leaf();
var prt = new StringPrinter();
obj1.str = "--- HELLO --- ";
console.log(obj1.str);
StaticMem.num = 12;
//access the field 
console.log("Reading attribute value Engine as :  " + obj.engine);
//access the function
StaticMem.disp();
prt.doPrint();
obj.disp();
shp1.disp();
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "hello";
        this.str2 = "world";
    }
    // Getters and Setters for private props
    Encapsulate.prototype.getstr2 = function () {
        return this.str2;
    };
    Encapsulate.prototype.setstr2 = function (s) {
        this.str2 = s;
    };
    return Encapsulate;
}());
var obj2 = new Encapsulate();
console.log(obj2.str); //accessible 
console.log(obj2.getstr2()); //compilation Error as str2 is private
console.log(obj2.setstr2("WORLD"));
console.log(obj2.str); //accessible
console.log("After reassign: " + obj2.getstr2());
console.log("--- Classes and Interfaces ---");
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var lobj = new AgriLoan(10, 1);
console.log("Interest is : " + lobj.interest + " Rebate is : " + lobj.rebate);
