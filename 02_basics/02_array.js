const marval_heros = ["thor", "ironman", "spiderman", "lokki"]
const dc = ["suparman", "flash", "batman"]

// marval_heros.push(dc)
// console.log(marval_heros[4]);
// console.log(marval_heros[4][1]);



// const allHerose = marval_heros.concat(dc)   // concat function
// console.log(allHerose);



// const allNewHeros = [...marval_heros,...dc]    // spread operator
// console.log(typeof(allNewHeros));
// console.log(allNewHeros);



// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]          
// const real_another_array = anotherArray.flat(Infinity)      // merge in one array
// console.log(real_another_array);



// console.log(Array.isArray("AMIT"))  // this is not a array
// console.log(Array.from("AMIT"))        // make array using from method
// console.log(typeof(Array.from("AMIT")))  // type show that"s this is a array / object

// console.log(Array.from({name: "AMIT"}));    // intresting  :     we explore this type of array after some time




let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))      // of method make array using variable
console.log(typeof(Array.of(score1,score2,score3)))      // type check