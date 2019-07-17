"use strict";
exports.__esModule = true;
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        
    }
    let avg = sum/nums.length;
    console.log("sum of the numbers", sum);
    console.log("Average: ", avg);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
addNumbers(1,5,34,65,7,12,7,45,13,6);
