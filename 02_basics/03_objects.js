// object agar litteral se bnega to wah singleton nhi hoga
// object agar constructor se bnega to wah hmesa singleton hoga


// singleton
// Object.create      // This is constructor method







//---------------------- object litterals -------------------------------


// const JsUser = {
//     name: "Amit",
//     age: 25,
//     location: "patna",
//     email: "xyz@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email);                     // this is not a good way
// console.log(JsUser["email"])





// const JsUser = {
//     "full name": "Amit Kumar",
//     "age": 25,
//     "location": "patna",
//     "email": "xyz@gmail.com",
//     "isLoggedIn": false,
//     "lastLoginDays": ["Monday", "Saturday"]
// }

// // console.log(JsUser.full name);    // not accessible
// console.log(JsUser["full name"]);
// console.log(JsUser["age"]);
// console.log(JsUser["location"]);
// console.log(JsUser["email"]);
// console.log(JsUser["isLoggedIn"]);
// console.log(JsUser["lastLoginDays"]);








// const mySym = Symbol("Key1") // define symbol
// const JsUser = {
//     // mySym: "myKey1",          // when we use symbol of this type then its datatype show string not symbol so this is wrong
//     [mySym]: "myKey1",             // this is right syntax of using symbol
//     name: "Amit",
//     age: 25,
//     location: "patna",
//     email: "xyz@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(typeof(JsUser[mySym]));
// console.log(JsUser[mySym]);

// JsUser.email = "abc@gmail.com"
// console.log(JsUser.email);       // change email 

// Object.freeze(JsUser);            // after using freeze method we can't perform any changes in object 

// JsUser.email = "amit@gmail.com"
// console.log(JsUser.email);













const JsUser = {
    "full name": "Amit Kumar",
    name: "Amit Kumar",
    "age": 25,
    "location": "patna",
    "email": "xyz@gmail.com",
    "isLoggedIn": false,
    "lastLoginDays": ["Monday", "Saturday"]
}

JsUser.greeting = function(){
    console.log("Hello jsUser");
}

JsUser.greetingTwo = function(){
    console.log(`Hello jsUser ${this["full name"]}`);
    console.log(`Hello jsUser ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
