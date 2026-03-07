/*
    var - function scope
    let - block scope
*/ 

if(true){
    var a = 10;
    let b = 20;
}

console.log(a);
//console.log(b);  //It will make reference error "b is not defined"


/*
    var > support redeclaration
    let > do not support redeclaration
*/

var x = 5;
var x = 10;

console.log(x);

let y = 7;
//let y = 12;  // It will make error "y has already been declared"

console.log(y);


/*
    variable declaration উপরে তুলে নেয় (hoisting) এবং undefined থাকে
    let hoisting হলেও ব্যবহার করা যায় না
 */

console.log(p);  //এটা undefined দেখাবে
var p = 80;

//console.log(q); এটা ”Cannot access 'q' before initialization” এই মেসেজ দিবে
let q = 100;


/*
     const car = 5; //এই ধ্রুবক এর মান ৫ দেয়া হয়েছে। এটা আর পরিবর্তন করা যাবে না।
*/

const car = 5;

console.log(car);

//car = 10;   // এটা TypeError: Assignment to constant variable এই মেসেজ দিবে

//console.log(car);
