// const promise1 = new Promise(function(resolve, reject){
//     // ------------- DO an async task --------------
//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve()
//     },1000)
// })

// promise1.then(function(){
//     console.log("promise consumed");
// })

//----------------------------------------------------------------------------------

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async to resolve");
// })

//----------------------------------------------------------------------------------

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"amit", email:"Example.com"})
//     },1000)
// })
// promise3.then(function(user){
//     console.log(user);
// })

//----------------------------------------------------------------------------------

// const promise4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "amit", password: "123" });
//     } else {
//       reject("ERROR: somthing is wrong");
//     }
//   }, 1000);
// });

// promise4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(()=>{
//     console.log("The promise is either resolve or rejected");
//   });

//----------------------------------------------------------------------------------

// const promise5 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Amit Kumar", password: "123" });
//     } else {
//       reject("ERROR: somthing is wrong");
//     }
//   }, 1000);
// });

// async function consumedPromise5() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumedPromise5();

//----------------------------------------------------------------------------------

async function getAllUsers() {
  try {
    const responce = await fetch("https://randomuser.me/api/");
    const data = await responce.json();
    console.log(data);
    
  } catch (error) {
    console.log("Error", error);
  }
}

getAllUsers();
