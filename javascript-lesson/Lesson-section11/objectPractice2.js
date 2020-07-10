var loginCheck = true;
var accountCreationCheck = false;

var login = function(userInput1,userInput2){
    if (userInput1 === user1.userName && userInput2 === user1.password ){
        console.log("user logged in");
        return alert("Welcome! "+user1.userName);

    }else if(userInput1 === user2.userName && userInput2 === user2.password){
        console.log("user logged in");
        return alert("Welcome! "+user2.userName);

    }else if(userInput1 === user3.userName && userInput2 === user3.password){
        console.log("user logged in");
        return alert("Welcome! "+user3.userName);

    }else{
        console.log("user FAILED to log in");
        return alert("Sorry, that was incorrect!");
    }
}

var accountCreation = function (){
    var newUserName = prompt("what is your desired username?: ");
    var newPassword = prompt("what is your desired password?: ");
    //creates a new user object
    database.push(user4);

}

var user1 = {
    userName: "bob",
    password: "123"

};

var user2 = {
    userName: "joe",
    password: "456"
};

var user3 = {
    userName: "sally",
    password: "789"
};

var database = [user1, user2, user3];

while(loginCheck === true || accountCreationCheck === false){

    var userInput1 = prompt("What is your username?: ");
    var userInput2 = prompt("What is your password?: ");
    login(userInput1, userInput2)
    loginCheck = false;
    console.log("login attempts expired")
    var userChoice = prompt("Would you like to create a new account? (yes/no): ");

    if (userChoice === "yes"){
        accountCreation();
        accountCreationCheck = true;
    }else{
        console.log("user did not want to create a new account");
        accountCreationCheck = true;
    }   
}
    
