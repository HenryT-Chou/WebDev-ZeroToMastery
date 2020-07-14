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

function loginCheck (inputName, inputPass){
    for (var i = 0; i < database.length; i++){
        if (database[i].userName === inputName && database[i].password === inputPass){
            return true;
        }  
    }
    console.log("user not found");  
    return false;
}

function signIn (inputName, inputPass){
    if (loginCheck(inputName, inputPass)){
        console.log("successfully logged in! Welcome: "+ inputName);
        console.log(newsFeed);
    }else{
        console.log("no such username/ pasword was found");
        return false;
    }
}

function accountExist (newInputName,newInputPass){
    for (var k = 0; k < database.length; k++){
        if (database[k].userName === newInputName || database[k].password === newInputPass){
            return true;
        }  
    }
    return false;
}

function createAccount(){
    console.log("let's create a new account for you")
    var newInputName = prompt("What is your desired username?: ");
    var newInputPass = prompt("What is your desired password?: ");
    if (accountExist(newInputName,newInputPass)){
        console.log("this user name or password is already taken");
        return;
    }
    //if account does not exist, create a new object and push it into database
    var user4 = {userName: newInputName,password:newInputPass};
    database.push(user4);
    console.log("new account created");
    alert("Welcome! "+database[3].userName);
    console.log(newsFeed);        
}

var inputName = prompt("What is your username?: ");
var inputPass = prompt("What is your password?: ");
//signIn(inputName, inputPass);
//this if statement calls signIn again so the first one isn't needed.
if (signIn(inputName,inputPass)===false){
    createAccount()
}


