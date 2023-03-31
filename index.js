let dbUser =[
    {
        username: "wanno",
        password: " password",
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

// try to call login function
//console.login("wanno", "password")
//console.login("wanno", "12345")
console.log(login ("wanno","34567"))

