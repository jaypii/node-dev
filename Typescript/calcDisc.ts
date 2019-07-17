function calculate_discount(price:number,rate:number = 0.50) { 
    var discount = price * rate;
    var dprice = price - discount; 
    console.log("Discount: ",discount);
    console.log("To Pay: ",dprice); 
 } 
 calculate_discount(1000) 
 calculate_discount(1000,0.30)