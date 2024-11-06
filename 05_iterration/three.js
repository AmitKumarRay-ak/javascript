//  for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5,6]

// for (const num of arr) {
//     console.log(num);
// }

//-----------------------------------------------

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }

//-----------------------------------------------

//------------- map ----------------------
const map = new Map()
map.set('IN',"India")
map.set('US',"United State America")
map.set('FR',"France")
// console.log(map);

for (const [key,value] of map) {
    console.log(key, ":", value);   
}