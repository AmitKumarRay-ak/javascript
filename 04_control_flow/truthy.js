// truthy and falshy value

// const userEmail = "a@gmail.com"; // truthy

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Not found");
// }



// --------------- falsy value ---------------

//  false
//  0
//  -0
//  BigInt
//  0n                    this is zero n 
//  ""
//  null
//  undefine
//  Nan


// ------------------------ truthy --------------------------------

// "0"
// "false"
// " "
// []
// {}
// function(){}

//--------------------------------------------------------------------


// ----------------- nullish coaleshing operator (??) --------------------
// null
// undefinne

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

// console.log(val1);

// ----------------------------------------------------------

//  ------------------------ ternary operator -------------------

// condition ? true : false

const iceTeaPrice = 70

iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");
