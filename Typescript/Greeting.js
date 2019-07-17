var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var gobj = new Greeting();
gobj.greet();
