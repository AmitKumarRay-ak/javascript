// forEach loop not return value

// const codding = ['js','ruby','java','python','cpp']

// const valus = codding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(valus);


// ---------------------------------------------------

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// // const newNums = myNums.filter((num)=> num > 4)
// const newNums = myNums.filter((num)=> {
//     return num > 4
// })
// console.log(newNums);

// ------------------------------------------------------

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// --------------------------------------------------------

const books = [
    {title: 'Book one', genre:'Fiction', publishing: '2001', edition:'2008'},
    {title: 'Book two', genre:'Science', publishing: '2006', edition:'2012'},
    {title: 'Book three', genre:'Arts', publishing: '2008', edition:'2019'},
    {title: 'Book four', genre:'Codding', publishing: '2001', edition:'2012'},
    {title: 'Book five', genre:'Math', publishing: '2005', edition:'2013'},
    {title: 'Book six', genre:'Hindi', publishing: '2009', edition:'2020'},
    {title: 'Book seven', genre:'Codding', publishing: '2020', edition:'2024'},
    {title: 'Book eight', genre:'Fiction', publishing: '2008', edition:'2012'},
    {title: 'Book nine', genre:'Speaking', publishing: '2007', edition:'2009'},
    {title: 'Book ten', genre:'Codding', publishing: '2015', edition:'2020'},
];

let userBook = books.filter((bk)=> bk.genre === 'Codding')
// console.log(userBook);

userBook = books.filter((bk)=>{
    return bk.publishing >= '2015' && bk.genre === 'Codding'  // if we write in curly bracates then compulsary to write here return keyword
})
console.log(userBook);

