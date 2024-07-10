const firstArray=[1,"Two",false,5]
// console.log(firstArray); //[ 1, 'Two', false, 5 ]
const SecondArray=new Array(9,7,5)
// console.log(SecondArray); // [ 9, 7, 5 ]

//array methods
// general methods
const arr=[1,2,3,4,5]
arr.push(6)
// console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
arr.pop()
// console.log(arr); // [ 1, 2, 3, 4, 5 ]

// not much used methods due to inefficieny
arr.unshift(0)
// console.log(arr); //[ 0, 1, 2, 3, 4, 5 ]
arr.shift()
// console.log(arr);//  [ 1, 2, 3, 4, 5 ]

// console.log(arr.includes(56)); // false
// console.log(arr.indexOf(3)); // 2

const strArray=arr.join()
// Adds all the elements of an array into a string, separated by the specified separator string
// console.log(strArray); // 1,2,3,4,5


//splice and slice
// slice() -> does not change the original array
//splice() -> changes the original array


