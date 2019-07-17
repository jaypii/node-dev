var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

console.log("");

var nums:number[] = [1,2,3,3] 
console.log(nums[0]); 
console.log(nums[1]); 
console.log(nums[2]); 
console.log(nums[3]);
console.log("")

var arr_names:number[] = new Array(4)

for(var i = 0;i<arr_names.length;i++) { 
    arr_names[i] = i * 2 
    console.log( i+"\t"+ arr_names[i]) 
}
console.log("")
var names:string[] = new Array("Mary","Tom","Jack","Jill") 

for(var i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}

var rnames = names.reverse()
console.log("->Reversed array")
for(var i = 0;i<rnames.length;i++) { 
    console.log(rnames[i]) 
}
console.log("\n--Array Destr--")
var arr:number[] = [12,13] 
var[x,y] = arr 
console.log(x) 
console.log(y)

console.log("\n--for..in--")
var j:any; 
var nums:number[] = [1001,1002,1003,1004] 

for(j in nums) { 
   console.log(nums[j]) 
} 
