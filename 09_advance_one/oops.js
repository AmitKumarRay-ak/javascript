const user = {
  userName: "Amit",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log('Got User Details');
    // console.log(`username: ${this.userName}`);
    console.log(this);
    
  },
};
// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

//-----------------------------------------------------------

//------------------ constructor functiion -------------------------------------
function user(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = user('Amit', 12, true)

console.log(userOne);
