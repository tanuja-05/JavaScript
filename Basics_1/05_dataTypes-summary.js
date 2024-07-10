/* Data types are divided in two types Primitives and Non Primitives 
--> they are generally categorized into How data is stored in the memory and How data is accessed from the memory

-->Primitives are also called as call by value which means the copy of the variable is given and any modification made to this 
  have no changes for the original value in the memory.

  ->they are 7 types
  1.String
  2.Number
  3.Boolean
  4.null
  5.undefined
  6.Symbol (to make the values unique)
  7.Bigint (used for scientific value)


-->Non Primitives are also called call by reference which means the ref of the variable is given from the memory ,any changes made
  to this will lead to change in the actual value of it.
  
  -> It's types
  1.Arrays
  2.functions
  3.objects


-->JavaScript is dynamically typed language which means the datatypes of the variables is determined during the execution(runtime)
 based on the value it holds 

 let's see example below

*/
 
let userName="tanuja" // until it get compiled userName dataType is not known  wheather it's string or number
let userId=73


//let's see how symbols are uniqely defined
let user_Id= Symbol(73)
let user_Age=Symbol(73)
// console.log(user_Id===user_Age); // false

//to represent BigInt to a number add 'n' to end of it
let bigInteger=123n
// console.log(typeof bigInteger); // bigint

//To know the dataType of variables use 'typeof' operator 
// let's see some dataTypes of diff variables
// All the Non primitive dataTypes are called as function and function's datatype is object function.


let exampleArray=[2,"four",6,false]
// console.log(typeof exampleArray); // object

let examplefunction = function () {
    console.log("this is example fn to check it's type");
}
// console.log(typeof examplefunction); // function also called as object function

let exampleObject={
    name:"tanuja",
    id:73,
}
console.log(typeof exampleObject); // object




// <---------------------Memory in JavaScript----------------------------------->

/*
-->There are two types of memory Stack and Heap 
-->Stack is used for Primitive datatypes 
  ->In stack memory u get the copy of the variable



-->Heap is used for Non primitive datatypes
  ->In heap memory u get the original reference of the variable
*/

//Example for stack memory(primitves)
let myName="tanuja"
let myNickname=myName
myNickname="tanu"
console.log(myName); //tanuja
console.log(myNickname); //tanu ,because only the copy of myName is given to myNickname so any changes made to it will not affect myName

//Example for Heap
let userFirst={
    name:"tanu",
    id : 75,
}
let userSecond=userFirst
userSecond.name="Tanuja"
console.log(userFirst); // { name: 'Tanuja', id: 75 }
console.log(userSecond); // { name: 'Tanuja', id: 75 } ,Since it's Non Primitive ,the original reference of the userOne is given to userSecond.