// reduce() function

const myNums = [1,2,3,4,5]

//// --------------- methode 1 ----------------

// const myTotal = myNums.reduce((accumulator,currentvalue)=>{
//     console.log(`accumumator: ${accumulator} and currentvalue: ${currentvalue}`);
    
//     return accumulator + currentvalue
// },0)
// console.log(myTotal);

//// --------------- methode 2 ----------------

// const myTotal = myNums.reduce(function (accumulator,currentvalue){
//     console.log(`accumumator: ${accumulator} and currentvalue: ${currentvalue}`);
    
//     return accumulator + currentvalue
// },0)
// console.log(myTotal);

//// --------------- methode 3 ----------------

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)
// console.log(myTotal);

//---------------------------------------------------------------

const shoppingCart = [
    {
        itemName: 'js course',
        price: 20
    },

    {
        itemName: 'js course',
        price: 10
    },

    {
        itemName: 'js course',
        price: 5
    }
]

const total = shoppingCart.reduce((acc, item)=> acc + item.price,0)
console.log(total);
