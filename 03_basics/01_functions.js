function sayMyName() {
  console.log("A");
  console.log("M");
  console.log("I");
  console.log("T");
}
// console.log(sayMyName());
// sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumber(5,4)

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }
// const result = addTwoNumber(5,4)
// console.log("Result: ",result);

// function addTwoNumber(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }
// const result = addTwoNumber(5, 4);
// console.log("Result: ", result);



function addTwoNumber(number1, number2) {
  return number1 + number2;
  
}
const result = addTwoNumber(5, 4);
// console.log("Result: ", result);



// function loginUserMassege(username){
//     if(username === undefined){
//         console.log("Please Enter the Username");
//         return
//     }
//     else{
//         console.log("User logged in");
//     }
//     return `${username} Just Logged In`
// }
// // console.log(loginUserMassege("Amit"));
// console.log(loginUserMassege());







// function loginUserMassege(username = "User"){
//     if(!username){
//         console.log("Please Enter the Username");
//         return
//     }
//     else{
//         console.log("logged in");
//     }
//     return `${username} Just Logged In`
// }
// console.log(loginUserMassege("Amit"));
//// console.log(loginUserMassege());






// function calculateCartPrise(...num1){          // ... this three dot is ( rest operator )
//     return num1
// }
// console.log(calculateCartPrise(200,300,100))





function calculateCartPrise(val1, val2, ...num1){          // ... this three dot is ( rest operator )
    return num1
}
// console.log(calculateCartPrise(200,300,100,9,7,5))





const user = {
    username: "Amit",
    prise: 99
}

function handalObject(anyobject){
    console.log(`Username is ${anyobject.username} and prise is ${anyobject.prise}`);
}

// handalObject(user)

// handalObject({
//     username: "AK",
//     prise: 200
// })





const myNewArray = [200,300,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
