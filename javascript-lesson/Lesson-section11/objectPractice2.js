var loginCheck = true;

var login = function(userInput1,userInput2){
    if (userInput1 === user1.userName && userInput2 === user1.password ){

        return prompt("Welcome! "+user1.userName);

    }else if(userInput1 === user2.userName && userInput2 === user2.password){

        return prompt("Welcome! "+user2.userName);

    }else if(userInput1 === user3.userName && userInput2 === user3.password){

        return prompt("Welcome! "+user3.userName);

    }else{

        return alert("Sorry, you don't have an account, let's create one!");
        var newUserName = prompt("what is your desired username?: ");
        var newPassword = prompt("what is your desired username?: ");
    }
    database.push(user4.newUserName, user4.newPassword)
}

var user1 = {
    userName: "bob",
    password: "123"

};

var user2 = {
    userName: "joe",
    password: "789"
};

var user3 = {
    userName: "sally",
    password: "456"
};

var database = [user1, user2, user3];

while(loginCHeck === true){

    var userInput1 = prompt("What is your username?: ");
    var userInput2 = prompt("What is your password?: ");
    login(userInput1, userInput2)
    loginCheck = false;

}

