class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`user name is ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`This course is added by ${this.username}`);
        
    }

}

const chai = new Teacher('chai', 'ab@gmail.com', '1234')

chai.addCourse()
chai.logMe()
