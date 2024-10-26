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

console.log(typeof myfunction)