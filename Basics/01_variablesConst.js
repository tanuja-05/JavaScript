/*
Variables and constants are nothing but keywords in javascript which are used to store value of variable names
in the memory

Variables keyword such as [let ,var ] which can be changed after declaration of a value

Constants keyword [const] which cannot be changed once declared 

*/

const adharNumber=123456
let names="tanuja"
var email="tanuja@outlook.com"
let password=3456

//Print method - 1
console.log(adharNumber);

//To print multiple variables at once
console.table([names,email,password])

//changing const to check
//adharNumber=45678
//console.log(adharNumber); => TypeError: Assignment to constant variable.

//problem with var keyword
//Not preferred to use because of issue in blocka and functional scope
email="maurya@gmail.com"
// console.log(email); => maurya@gmail.com


//what if we don't declare value after initialization
let age;
 console.log(age); // by default it is undefined
