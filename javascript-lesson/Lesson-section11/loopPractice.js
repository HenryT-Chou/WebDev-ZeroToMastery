var todos = [
    "clean room",
    "apply for jobs",
    "learn js"
];

// for (var i=0; i<todos.length; i++){
//     console.log(i);
// }

console.log("one way to call forEach")
// numerate each todo item on your list each time the function is called 
function logTodo(todo, i){
    console.log(todo,i);
}
// for each item in todos, run the logTodo function
todos.forEach(logTodo);

console.log("another way to call forEach")
// forEach asks, for each element in todos array, what do you want me to do with it? 
// i is each element of array todos, i is not the index in this case, the second argument that forEach recieves is the index
todos.forEach(function(i,realIndex){
    console.log("actual value in array(string): " + i +",", "outputting index (num): " + realIndex);
})