/*
    ? Iteration methods
    - Do not destroy/alter original array
    - Take in a callback function
    - Loop through arrays
    - Must have a return
*/

// example below

let fruits =["apple", "pear", "mango", "orange", "pineapple"];

const filteredFruit = fruits.filter((fruit) => {
    let result = fruit != "mango";
    return result;
});

// != will give you unequal sign

// Example #2 below

console.log(filteredFruit);

let fruit1 ="pineapple";
console.log(fruits[4]);
console.log(fruits[4].includes(fruit1));

const filteredFruit2 = fruits.filter((fruit) => !fruit.includes("apple"));
console.log(filteredFruit2);


//  Example 3
function removeMango(fruit) {
    let results = fruit != "mango";
    return results;
}

const filteredFruit3 =fruits.filter(removeMango);
console.log("original:", fruits);
console.log("Filtered:", filteredFruit3);
console.log(filteredFruit3);


/*
Challenge:
    How do you remove 5's from an array
    Store it in a new variable and console log that variable
*/

let myNumArray = [1,5,6,3,8,9,4,5];

let newNumArray = myNumArray.filter((num) => num != 5);
console.log(newNumArray);



//challenge

let movies =[
    { name: "Top Gun 2", category: "Action"},
    {name: "Scary Movie 5", category: "Horror"},
];

movies.push({name: "It", category: "Horror"});
movies.push({name: "Get Out", category: "Horror"});
movies.push({name: "Taken", category: "Action"});

let actionMovies = movies.filter((movie) => movie.category === "Action");
console.log(actionMovies);
let horrorMovies = movies.filter((movie) => movie.category === "horror");
console.log(horrorMovies);


//? forEach()

//Example

let newFoodList = ["apple", "pear", "mushroom", "cheese", "peach"];

// for (let i =0;, i < newFoodList.length; i++) {
//     console.log(newFoodList[i]);
// }

newFoodList.forEach((item, index) => {
    console.log("ForEach:",item, "Index", index);
});


/* 
    Create an array containing movie titles
        -use a foreach to list out your movies
        -Add another movie to the end
        -And replace one of your existing movies with another
*/


// Example 
let movieList = ["Matrix", "Babe", "Little Mermaid", "The Two Towers"];
movieList.forEach((movie) => console.log(movie));
movieList.push("Aladin");
console.log(movieList);

movieList.splice(1,1,"Barbie");
console.log(movieList);

//? .find()  
//Example
let tmnt = ["Mikey", "Donnie", "leo", "Ralph", "Splinter", "Shredder", "Baxter"];

let character = "le";
console.log("Find:", tmnt.find((charName) => charName === character)
);

character = "April";

console.log (
    "Find Again:",
    tmnt.find((c) => c === character)
);

//? .at()
//Example

console.log(tmnt[tmnt.length -1]); //old school way
console.log(tmnt.at(-1));

//? .map()
/* 
    -similar to a forEach()
    -takes in a callback fx
*/

let numArray = [];
let fizzBuzzArray = [];

for(let i = 1; i<101; i++) {
    numArray.push(i);
}

console.log(numArray);

numArray.map((x) => {
    if (x % 15 ===0) {
        fizzBuzzArray.push(x);
    }
});

console.log(fizzBuzzArray);

let newFizzBuzzArray = numArray.map((num) => num % 15 ===0);

console.log("new fizz buzz", newFizzBuzzArray);

/* 
CHALLENGE
 Using a method, flip the values in an array
    Ex [1,2,3,4,5]
    output: [ 5,4,3,2,1]
*/

// let arr = //go back to teachers notes to finish challenge
