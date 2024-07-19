/*To define objects there can be two ways
 - literals
 - constructor

 singleton:whenever u make object thru constructor it is called as
           singleton(apne tarah ka ek hi object hai)
 -which means whenever u make object by literals it's not singleton
*/

//object literals
let student={
    name:"tanuja",
    "full name":"Tanuja Maurya",
    rollno:75,
    isPresent:false,
}
//method 1 to access
// console.log(student.name);

//method 2 to access
// console.log(student["full name"]);

//how to declare a symbol and use in object and log to the console.
const symOne=Symbol("key1")

const user={
    name:"userOne",
    [symOne] : "userKeyOne",
    id:45,
}
 
// console.log(user[symOne]); //userKeyOne

//how to alter values of key in object
student.isPresent=true;
// console.log(student);


//how to prevent objects from changing it's values
// Object.freeze(student);
// student.name="Tannu"
// console.log(student);


//adding fn to objects
student.message=function(){
    console.log("Be regular to classes");
}
// console.log(student.message); --> returns functions ref 
console.log(student.message());

// 'this' keyword : whenever we have to refer the same object we use this,generally in fns
student.messageSecond=function(){
    console.log(`Your roll no is : ${this.rollno}`);
}
console.log(student.messageSecond());