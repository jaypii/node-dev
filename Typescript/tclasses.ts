export{}
class Car { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   " + this.engine) 
    } 
}

class Shape { 
    Area:number 
    
    constructor(a:number) { 
       this.Area = a 
    } 
}

class Circle extends Shape {
    disp():void { 
        console.log("Area of the circle:  "+ this.Area) 
    } 
}

class Root { 
    str:string; 
}

class Child extends Root {}
class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance

class PrinterClass { 
    doPrint():void {
       console.log("doPrint() from Parent called…") 
    } 
} 
 
 class StringPrinter extends PrinterClass { 
    doPrint():void { 
       super.doPrint() 
       console.log("doPrint() is printing a string…")
    } 
}

class StaticMem {  
    static num:number; 
    
    static disp():void { 
       console.log("The value of num is "+ StaticMem.num) 
    } 
} 

//create objects 
var obj = new Car("XXSY1")
var shp1 = new Circle(223)
var obj1 = new Leaf()
var prt = new StringPrinter()

obj1.str = "--- HELLO --- "
console.log(obj1.str)
StaticMem.num = 12

//access the field 
console.log("Reading attribute value Engine as :  "+obj.engine)  

//access the function
StaticMem.disp()
prt.doPrint()
obj.disp()
shp1.disp()

class Encapsulate { 
    str:string = "hello" 
    private str2:string = "world"

    // Getters and Setters for private props
    getstr2() {
        return this.str2
    }

    setstr2(s) {
        this.str2 = s
    }
 }
  
 var obj2 = new Encapsulate() 
 console.log(obj2.str)     //accessible 
 console.log(obj2.getstr2())   //compilation Error as str2 is private
 console.log(obj2.setstr2("WORLD"))
 console.log(obj2.str)     //accessible
 console.log("After reassign: " + obj2.getstr2())

 console.log("--- Classes and Interfaces ---")

interface ILoan { 
    interest:number 
} 
 
class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
} 

var lobj = new AgriLoan(10, 1);
console.log("Interest is : " + lobj.interest + " Rebate is : " + lobj.rebate);