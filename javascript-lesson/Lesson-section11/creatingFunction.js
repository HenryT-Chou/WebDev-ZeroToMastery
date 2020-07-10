// function declaration
function sayHello() {
    console.log("Saying Hello");
}

sayHello();

// function expression
var sayBye = function() {
    console.log("Saying Goodbye")
}
sayBye();

// function sayBye is an anon function
function sing(song){
    console.log(song);
}
sing("do re mi")

function multiply(a,b){
    if (a > 10 || b > 10){
        return alert("that's too hard")
    }else{
        return a*b // ends a function
    }
}