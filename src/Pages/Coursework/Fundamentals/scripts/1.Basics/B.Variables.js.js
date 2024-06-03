/*===================================
||
|| Variables
||
===================================*/
console.group("Variable");

/*
A variable is a reference to a value so it can be used over and over,
or referenced later on
*/

// Let can be changed
let favColor = "Blue";
console.log(favColor);
favColor = "Red";
console.log(favColor);

// Const cannot be changed
const firstName = "Mitch";
console.log(firstName);
// firstNmae = "David";
// console.log(firstName);

console.groupEnd();
