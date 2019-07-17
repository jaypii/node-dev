var val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)

function disp(name:string|string[]) { 
    if(typeof name == "string") { 
       console.log(name) 
    } else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 }
 console.log("")
console.log("--- UNIONS ---")
console.log("--> Printing name string ....");
disp("Marten");
console.log("--> Printing names array ....");
disp(["Mark", "Tom", "Mary", "John"]);

var arr1:number[]|string[]; 
var i:number; 
arr1 = [1,2,4,8,16,32] 
console.log("--- numeric array ---")  

for(i = 0;i<arr1.length;i++) { 
   console.log(arr1[i]) 
}  

arr1 = ["Mumbai","Pune","Delhi"] 
console.log("--- string array ---")  

for(i = 0;i<arr1.length;i++) { 
   console.log(arr1[i]) 
} 