var num = 0;
var count = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        console.log(num + "\t" + (num + 1) + "\t" + (num*num));
        continue;
    }
    count++;
}
console.log(" The count of odd values between 0 and 20 is: " + count);
