// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toLowerCase()}`
    }

}

const fry = new User("Karen", "karen@mail.com", "123")

console.log(fry.encryptPassword());
console.log(fry.changeUsername());

// behind the scene of all the above code -

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toLowerCase()}`
}


const cry = new User("Satyam", "satyam@mail.com", "123")

console.log(cry.encryptPassword());
console.log(cry.changeUsername());