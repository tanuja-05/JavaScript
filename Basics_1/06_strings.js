//normal = > old
// mentos => new [diff from the crowd ;) ] /  another way of it 

// to concatenate string use '+' operator and print it - normal method
let firstName="tanu"
let rollno=73
// console.log(firstName+rollno); // tanu73

//mentos method for printing using "string interpolation" which provide placeholders ,more readable
// console.log(`my name is ${firstName} and my roll no is ${rollno}`); // my name is tanu and my roll no is 73

//normal way to declare string
let normalString="this is normal string"
// console.log(typeof normalString); //  string

//mentos way to declare string -> using new keyword
const newString=new String("IRON MAN") 
// console.log(typeof newString); // object
// console.log(newString.__proto__); //{}
// console.log(newString.toLowerCase()); iron man

// to know which char is at particular index 
// console.log(newString.charAt(3)); // N

//to know at what index particular char is present
// console.log(newString.indexOf('N')) // 3

//some intresting methods

const anotherString=new String("captain america")

//substring method (0,5 ] => 0,1,2,3,4
const exSubString=anotherString.substring(2,4) // c a p t a i n_a m e r i c a 
// console.log(exSubString); // pt

//slice method : can take -ve value ,it's just reverse it and take from starting values (0,4] => 0,1,2,3
const exSlice=anotherString.slice(-10) // c a p t a i n_a m e r i c a 
// console.log(exSlice); // in america

// to remove start and end spaces we use .trim()
const thirdString =new String("     coding   ")
// console.log(thirdString.trim()); // coding


// use case method => stringName.replace('the string to be replaced ','the string to kept instead' ) 
//in urls we usually get some numbers if we have spaces in url because of url encoder ex like below

let url ="www.tanuja_maurya/home%34page" // %34 is due to space, url encoder kept %34 to avoid space
// console.log(url.replace('%34','_')); // www.tanuja_maurya/home_page


// to check if particular set of string is present in a string or not
let exIncludes=new String("helloMeow")
// console.log(exIncludes.includes('Meow')); // true

//convert string into array based of some specifications by separating them such as spaces or '-' or '_' etc 
let exSplit=new String("Tanuja_Maurya")
// console.log(exSplit.split('_')); // [ 'Tanuja', 'Maurya' ]


