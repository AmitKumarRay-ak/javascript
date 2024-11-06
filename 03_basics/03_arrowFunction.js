const user = {
    username: "Amit",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }

}

// // console.log(user.welcomeMessage());
// user.welcomeMessage()

// user.username = "AK"
// user.welcomeMessage()
// console.log(this);













///////////////////////////////////////////////////////////////////////////////////////////////////////

// function chai(){
//     let username = "amit"
//     console.log(this.username);
    
// }
// chai()

//////////////////////////////////////////////////////////////////////////////

// const chai = () => {
//     let username = "amit"
//     // console.log(this.username);
//     console.log(this);
// }
// chai()



///////////////////////////////////////////////////////////////

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,2))

// ----------------------------------- implicite arrow function ---------------------------------
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3,2))



// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,2))



const addTwo = (num1, num2) => ({username: "Amit"})
console.log(addTwo(3,2))