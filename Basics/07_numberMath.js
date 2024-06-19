//to define a number
const numOne=5
// console.log(numOne);

//to explicitly define a number
const numTwo=new Number(2)
// console.log(numTwo); //it is of type number

//convert number to string thru method ->toString()
//it can be used to perform various operations on the number
// console.log(numOne.toString());//5 typeof--> string
// console.log(numOne.toFixed(2)); //5.00

const numThree=124.799
// console.log(numThree.toPrecision(4)); //124.8

//represent a number in local manner
const zeros=100000000000000
// console.log(zeros.toLocaleString('en-IN'));//10,00,00,00,00,00,000

//<----------------Math------------------------>
// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-19)); // 19
// console.log(Math.round(4.77)); // 5
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.floor(4.8)); // 4

//useful things in Math
//random -it always lies between 0 and 1
console.log(Math.random()); //0.77

let min=5
let max=15
console.log(Math.floor(Math.random()*(max-min+1)+min)); //10

