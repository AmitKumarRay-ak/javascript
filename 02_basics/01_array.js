// array

// const myArray = [0,1,2,3,4,5]
// const myHeros = [saktiman, nagraaj, ironman, spidarman]
// console.log(myArray[2]);



// const myArr2 = new Array(12,22,13,23,14,24)
// console.log(myArr2);




//******************************** Insert Element In Array ********************************** */
// const myArray = [0,1,2,3,4,5]

// myArray.push(6)
// myArray.push(7)             // push method insert value at the end

// myArray.pop()               // pop method is used to remove value from end

// myArray.unshift(9)          // unshift method is use for to insert the value in starting

// myArray.shift()             // this methode is used to shift value in left side

// console.log(myArray.includes(9));       // This is used for to ask question in true and false

// console.log(myArray.indexOf(4));
// console.log(myArray.indexOf(9));
// console.log(myArray);







// const myArray = [0,1,2,3,4,5]
// const newArr = myArray.join()

// console.log(typeof(myArray));    // Array show
// console.log(typeof(newArr));    // string show










//-------------------------------- slice & splice ------------------------------

const myArray = [0,1,2,3,4,5]
console.log(myArray.slice(1,3));     // slice function is not manipulated in original array
console.log(myArray);

console.log(myArray.splice(1,3));     // splice funcction is manipulated in original araay
console.log(myArray);

