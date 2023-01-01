// hoisting in variable declaration

// Browser engine has two phase
// first phase is memory allocation
// second phase is code execution
//

//normal declaration

let a = 25;
console.log(a); //25

//execution of hoisting

console.log(b);
let b = 10; //undefined

// how the browser engine runs the code

let c;
console.log(c); //undefined

// which is not equals to not defined both are different

console.log(d); //not defined
