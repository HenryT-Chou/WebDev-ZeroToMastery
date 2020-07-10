var user = {
    name: "John",
    age: 34,
    hobby: ["soccer", "tennis"],
    isMarried: false,
    //function in side an object is a method
    catchPhrase: function() {
        console.log("now you see me...");
    }
};

//adding a category to user
user.favoriteFood = "pizza";
//changing a property of orignal list
user.isMarried = "true";
console.log(user);

user.hobby = user.hobby.push("video games");
console.log(user);

// you can also have an array of objects
