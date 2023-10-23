function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username) // passes the context
    // .call() is used to hold the reference
    // we can pass "this" as an parameter in .call() method (optionally)
    this.email = email
    this.password = password
}

const fry = new createUser("bro", "bro@fb.com", "123")
console.log(fry); // createUser { username: 'bro', email: 'bro@fb.com', password: '123' }
