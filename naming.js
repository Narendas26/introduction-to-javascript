// Single Line Comment
// Rules for Naming Variables:
// 1. No Keyword in variable Name
var false = 45; //Here false is a keyword for this reason this statement is wrong
var var = 50; //Here false is a keyword for this reason this statement is wrong

// 2. No Space or gap in variable name
var is happy = false; // Here the variable name has space in name. So it show error.
var ishappy = true; // this statement is correct

// 3. no quote : Following statement is wrong because used of quote in variable name
var "address" = "Bandarban"; 

// 4. Can not start with a number but number in later position is allowed 
var money22 = 45; //This statement is correct
var 22money = 45; //This statement is not correct because it start with a number

//5. Name is case sensitive 
var address = "Bandarban";
console.log(Address); // this statement will make an error because variable address & Address are not same variable

//6. How to write a long variable name
var my current home address = "Bandarban Sadar";
var mycurrenthomeaddress = "Bandarban Sadar";
var my_current_home_address = "Bandarban Sadar"; //snake case
var myCurrentHomeAddress = "Bandarban Sadar"; //Camel Case
var MyCurrentHomeAddress = "Bandarban Sadar"; //Pascal Case
