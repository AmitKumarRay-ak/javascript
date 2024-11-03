// // ---------------- singlton --------------------
// const tinderUser = new Object()  // we can declaire object both tyoes are correct

// // -------------- non singlton ------------------
// const tinderUser2 = {}           // we can declaire object both tyoes are correct

// console.log(tinderUser);
// console.log(tinderUser2);





const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);








const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstname: "Amit",
            lastname: "Kumar",
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.lastname);   // this is lenghthy way







const obj1 = {
    1:"a", 
    2:"b"
}

const obj2 = {
    3:"c", 
    4:"d"
}

const obj3 = {
    5:"e", 
    6:"f"
}

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({},obj1,obj2)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);







const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },

    {
        id: 2,
        email: "b@gmail.com"
    },

    {
        id: 3,
        email: "c@gmail.com"
    },
]
// console.log(user[0].email);
// console.log(user[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));














const course = {
    coursename: "js in hindi",
    prise: 999,
    courseinstructor: "amit"
}

// console.log(course.courseinstructor);

// const{courseinstructor,prise} = course
// console.log(prise);

// const{courseinstructor: instructor} = course
// console.log(instructor);














// **************************************************************************************
// *******************************    API  **********************************************
// **************************************************************************************

// JSON format



//  ----------------------API IN OBJECT FORMATE       EXAMPLE--------------------------

// {
//     "name": "Amit",
//     "coursename":"js in hindi",
//     "prise": "free"
// }





//--------------------------------------API IN ARRAY FORMATE EXAMPLE--------------------------------

// [
//     {},
//     {},
//     {},
// ]