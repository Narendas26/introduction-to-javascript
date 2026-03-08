var orangePrice = 20;  //This will be treat as number
var chocolatePrice = 0.5; //This wiil be treat as number
var applePrice = '26';  //This will be treat as string

console.log(orangePrice);
console.log(typeof orangePrice);

console.log(chocolatePrice);
console.log(typeof chocolatePrice);

console.log(applePrice);
console.log(typeof applePrice);

var watermelonPrice = 50;
var guavaPrice = 30;

console.log(watermelonPrice + guavaPrice);
console.log(orangePrice + applePrice); //This will not make a perfect result because number + string can not possible

// Convert String to number
applePrice = parseInt(applePrice);

console.log("Type of applePrice " + typeof applePrice);
console.log(orangePrice + applePrice);

// This wll not performed because Wrong data are give input which are not number
var mangoPrice = parseInt("Twenty Five Taka");

console.log("After Conversion:" + typeof mangoPrice); 
console.log(mangoPrice); //This will show NaN which means not a number


var strawberryPrice = parseInt('22.5');
console.log(strawberryPrice); //This statement will show 22 because we convert it to integer

var icecreamPrice = parseFloat('25.5'); //This statement keep the floating point. 
console.log(typeof icecreamPrice);
console.log("Price of icecream " + icecreamPrice); 


var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total);
console.log(total.toFixed(2)); // This statement decide how many digit show after the fraction. 

var num = 50 / 0;
console.log(num);

var x = '10'; //string type data
console.log(typeof x); 
var num = Number(x); //convert to number
console.log(typeof num);

var num1 = 4.56789;
console.log(num1.toFixed(2)); // how many number show after fraction

var num2 = isNaN(9);  //check that the value is number or not if number return false otherwise return true
console.log(num2); 

var num3 = isNaN(4 - 'hello'); //here we get NaN so it return true
console.log(num3);