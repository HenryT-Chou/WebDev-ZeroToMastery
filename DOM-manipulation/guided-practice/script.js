//Select the element tagged by this specific Id
var button = document.getElementById("addToList");
//select the element tagged by this specific ID
var input = document.getElementById("userInput");
// select the ul that was made in the html file and store it to manipulate later
var ul = document.getElementById("VIPLIST");
//if you didn't assign the ul a specific id you could use querySelector
//to pick the first usage of ul
// var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function addListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";   
}

function addItemAfterClick() {
    if (inputLength() > 0){
        addListElement();
    }
}

function addItemAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13){
        addListElement();
    }
}

// notice in the original call below we had to create a function that had no
// name? well now we can put one of our created functions in there
// button.addEventListener("click", function(){})
//
button.addEventListener("click", addItemAfterClick);
input.addEventListener("keypress", addItemAfterKeypress);

// you can also use mouseenter/ mouselave as the first arguement
//mouseenter / mouseleave
// button.addEventListener("click", function(){
//     // console.log("You clicked the button")
    
//     // only add to the list if you enter something
//     if (input.value.length > 0){
//         //when the button is clicked you create an li item
//         var li = document.createElement("li");
//         //use the following to attach a certain text to li
//         li.appendChild(document.createTextNode(input.value));
//         //access the ul and append the newly created li to it
//         ul.appendChild(li);
//         //reset the input box to be empty so list can't be spammed
//         input.value = "";
//     }

// })

//testing a different way to process the user input
// input.addEventListener("keypress", function(){
//     // console.log("You clicked the button")
//     console.log(event.which);
//     // only add to the list if you enter something
//     if (input.value.length > 0 && event.which === 13){
//         //when the button is clicked you create an li item
//         var li = document.createElement("li");
//         //use the following to attach a certain text to li
//         li.appendChild(document.createTextNode(input.value));
//         //access the ul and append the newly created li to it
//         ul.appendChild(li);
//         //reset the input box to be empty so list can't be spammed
//         input.value = "";
//     }

// })

// Let's refactor the above code and make it easier to look at and use