/* Basic comparisons
 >
 <
 >=
 <=
 !=
 ==

*/

// console.log("65">64); // true
// console.log("05">4);  // true

// generally when we compare values make sure the values are of same data type

console.log(null > 0 ); // false
console.log(null == 0 ); // false
console.log(null >= 0 ); // true 

// the reason behind this is equality check (==) and comparsion check (<,>,>=,...) work differently.
//comparison convert null to a number as 0 that is why null > 0 is false 

// === (strict check ,checks the datatypes of the values)
console.log(1==="1"); //false