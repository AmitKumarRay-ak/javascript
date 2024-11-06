// callback function

const codding = ['js','ruby','java','python','cpp']

// codding.forEach( function (val) {
//     console.log(val);
// })

// codding.forEach( (val) => {
//     console.log(val);
// })



const myCodding = [           // array declaire
// object 1
{
    languageName: "Javascript",
    languageFileName: "js"
},
// object 2
{
    languageName: "Php",
    languageFileName: "php"
},
//object 3
{
    languageName: "Java",
    languageFileName: "java"
}
]
myCodding.forEach((item)=>{
    console.log(item.languageName);
    
})