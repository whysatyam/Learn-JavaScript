class User {
    constructor(username){
        this.username = username
    }

    logMe(){ 
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // extends - provides access
    constructor(username, email, password){
        super(username) // super helps in giving direct access , without using "this" keyword
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe() // USERNAME is chai


const masalaChai = new User("masalaChai")
masalaChai.logMe() // USERNAME is masalaChai

console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true