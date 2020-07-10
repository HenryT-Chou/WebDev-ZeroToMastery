var age = 0;
// REMINDER! prompt returns a string!!!
// age = prompt("Hello sir/ma'am how what is your age? ");
checkAge(age)

function checkAge(age){
    if(Number(age) === 18){
        return alert("First year driving huh? Be careful!");
    }
    else if(Number(age) > 18){
       return alert("You may drive! Be safe!");
    }
    else{
        return alert("sorry you are too young to drive");
    }
}

