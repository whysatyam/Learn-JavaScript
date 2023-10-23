class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // static function can never be accessed
        return `123`
    }
}

const satyam = new User("satyam")
console.log(satyam.createId()) // error - cant be accessed as it uses 'static' keyword

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe(); // Username: iphone // accessible
console.log(iphone.createId()); // error - cant be accessed as it uses 'static' keyword