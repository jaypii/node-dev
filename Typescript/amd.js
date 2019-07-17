"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("Cirlce is drawn (external module)");
    };
    return Circle;
}());
exports.Circle = Circle;
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log("Triangle is drawn (external module)");
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var circle = require("./Circle");
var triangle = require("./Triangle");
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
