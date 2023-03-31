let dbUser =[
    {
        username: "wanno",
        password: "password",
        name: "wanno bijak",
        email: "wanno@utem.edu.my"
    },
    {
        username: " yat",
        password: " booo ",
        name: "yat bijak",
        email: "yat@utem.edu.my" 
    }
]
function login(username, password){
    console.log("someone try to login with", username, password)
    let matched = dbUser.find(element =>
        element.username == username
       
    )
    //console.log(matched)
    if(matched) {
        if(matched.password == password) {
            return matched
        } else {
            return " password not matched"
        }
}
else {
    return " username not found"
} }
function register(newusername, newpassword, newname, newemail) {
    // To do : check if usrname exist

    dbUser.push( {
        username: newusername,
        password: newpassword,
        name: newname,
        email: newemail
    })
}

// try to call login function
//console.login("wanno", "password")
//console.login("wanno", "12345")
console.log(login ("wanno","password"))
console.log(login("wanno", "password"))
register("bb","blablabla", "pee-mak", "gocoh@gmail.com")
console.log(login("bb", "blablabla"))