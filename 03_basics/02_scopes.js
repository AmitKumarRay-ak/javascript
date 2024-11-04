
if(true){
    let a = 10
    const b = 20
    var c = 30
}








function one(){
    const username = "Amit" 
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    two()
}
// one()



// if(true){
//     const username = "Amit"
//     if(username==="Amit"){
//         const website = "youtube"
//         console.log(username + website);
//         console.log(website);
        
//     }
//     // console.log(website);  // show Error  because this is not wrrite in scope
//     console.log(username);
    
// }
// // console.log(username);     // show error











//--------------------------- intresting ----------------------------


console.log(addone(5));

function addone(num){
    return num + 1
}




console.log(addTwo(5));  // give error

const addTwo = function addone(num){
    return num + 2
}
