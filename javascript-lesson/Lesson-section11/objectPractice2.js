var loginCheck = true;
var accountCreationCheck = false;

var user1 = {
    userName: "bob",
    password: "123",
    
};

var user2 = {
    userName: "joe",
    password: "456",
    
};

var user3 = {
    userName: "sally",
    password: "789",
  
};

var database = [user1, user2, user3];
var newsFeed = [
    {
        userName: "bob",
        timeline: "I'm loving JS"
    },
    {
        userName: "joe",
        timeline: "how is time moving so slowly",
    },
    {
        userName: "sally",
        timeline: "can't wait for the weekend",
    }
];

var login = function(userInput1,userInput2){
    if (userInput1 === user1.userName && userInput2 === user1.password ){
        accountCreationCheck = true
        console.log("user logged in");
        alert("Welcome! "+user1.userName);
        console.log(newsFeed);
        return 
        
    }else if(userInput1 === user2.userName && userInput2 === user2.password){
        accountCreationCheck = true
        console.log("user logged in");
        alert("Welcome! "+user2.userName);
        console.log(newsFeed);
        return
        
    }else if(userInput1 === user3.userName && userInput2 === user3.password){
        accountCreationCheck = true
        console.log("user logged in");
        alert("Welcome! "+user3.userName);
        console.log(newsFeed);
        return

    }else{
        console.log("user FAILED to log in");
        return alert("Sorry, that was incorrect!");
    }
}

var accountCreation = function (){

    var newUserName = prompt("what is your desired username?: ");
    var newPassword = prompt("what is your desired password?: ");
    //creates a new user object
    var user4 = {userName: newUserName,password:newPassword};
    database.push(user4);

    console.log("new account created");
    alert("Welcome! "+database[3].userName);
    console.log(newsFeed);        
    return 

}

while(loginCheck === true || accountCreationCheck === false){

    var userInput1 = prompt("What is your username?: ");
    var userInput2 = prompt("What is your password?: ");
    login(userInput1, userInput2)
    loginCheck = false;
    console.log("login attempts expired")
    if (accountCreationCheck === false){
        var userChoice = prompt("Would you like to create a new account? (yes/no): ");
        if (userChoice === "yes"){
            accountCreation();
            accountCreationCheck = true;
        }else{
            console.log("user did not want to create a new account");
            accountCreationCheck = true;
        } 
    }else{
        console.log("user did not want to create a new account");
    }
  
}
    
