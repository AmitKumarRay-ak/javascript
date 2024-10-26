// premitive DataType  
// 7 types :  String, Number, Boolean, Null, Undefine, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail = undefined
let userEmail1

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 656655555879654565554555555555n
// console.log(bigNumber)

//



















// non premitive / Reference type DataType
// Array, Objects, Functions

const heros = ["saktiman", "thor", "ironman"]
// console.log(typeof heros)

const obj1 ={
    name : "amit",
    age : 25,
}
// console.log(typeof obj1)




const myfunction = function(){
    console.log("Hello Amit")
}

// myfunction()

// console.log(typeof myfunction)









//                                      Stack And Heap Memory
// ********************************************************************************************************

// stack memory  :        use in premitive datatype
// heap memory   :        use in non premitive datatype

let myYoutubeName = "AmitYT"
let anotherName = myYoutubeName
anotherName = "amit"
console.log(myYoutubeName);
console.log(anotherName);

let user1 = {
    name: "Amit",
    email: "abc@gmail.com",
}

let user2 = user1

user2.email = "amit@gmail.com"
console.log(user1);
console.log(user2);
