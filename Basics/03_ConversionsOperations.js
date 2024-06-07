// DATA TYPE CONVERSIONS

let val=3 // to convert in string datatype : val=String(3)
let val1=Number("333aa") 

let str=String(val)
// console.log(typeof str);
// console.log(typeof val); --> number
// console.log(typeof(val1)); --> number
// console.log(val1) --> NaN


//<--Observation-->

// type of "65" => string
//         "65tm" => NaN
//         true => 1 & false = 0
// type of 1 = true | 0 = false
// type of "" = false
// type of "tanuja" = true


// <----------OPERATIONS------------->

//  console.log(1+5); // 6
//  console.log("1"+5); // 15
//  console.log("1"+3+5); // 135
//  console.log(1+3+"5"); // 45

 // if string type is first then entire type is string 

 // tricky conversions

//  console.log(+true); // 1
//  console.log(+""); // 0

 // increment operators
 let a=5
 console.log(a++); // 6
 ++a
 console.log(a); // 7

