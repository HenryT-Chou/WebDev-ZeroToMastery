var animalList = ["tiger", "cat", "bear"];
console.log(animalList[1]);

// arrays can hold boolean, numbers, and even functions
// mixed arrays are bad for performance

var list = [animalList, [0,1,2,3], ["apple", "orange", "pear"]];
console.log(list)
console.log(list[1][3]) // returns 4th elements of the 2nd array

// list.shift removes the first element and shifts everything back
// list.pop removes the last element in the array

animalList.shift();
console.log(animalList)

animalList.pop();
console.log(animalList)

animalList.push("lizard");
console.log("adding lizard to animalList")
console.log(animalList)

var newAnimalList = animalList.concat(["bee", "dragon"]);
console.log("adding an array to an existing array")
console.log(animalList)
// notice how printing animalList doesn't actaully return the new array that was added? it's becuase when you concatenate, you create an new arroy
console.log("adding an array to an existing array")
console.log(newAnimalList)

//excersise 6
var arrayPractice = ["Banana", "Apples", "Oranges", "Blueberries"];
arrayPractice.shift();
arrayPractice.sort();
arrayPractice.push("Kiwi");
arrayPractice.reverse();
arrayPractice.pop();
console.log(arrayPractice)
// access oranges
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0])