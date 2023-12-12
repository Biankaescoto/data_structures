/* 
    ? Array
    -Denoted with square brackets
    -Indices start at zero 0
    -Using a property called "length" =, we can find the sum of data stored
*/

let list = ["milk","bread", "chicken", "coffee"];
// if milk is zero bc indexes start at 0, then bread is 1
// console.log(list[1]);
// console.log(list.length);

list[0] = "chocolate milk" ;
// console.log(list);

let avengers = ["Nick", 2, false, "steve", "Bruce", ["Tony", 8, true]];

console.log(typeof avengers);   //* logs 'object', everything in JS is an object
console.log(avengers instanceof Array); //* true

/*
    Using a console.log()
    -Target Bruce
    -Target true
    -using string interpolation, return "Hello, Nick" and "Hello Tony"
*/
// ? example finding indexes in arrays
// console.log(avengers[4]);
// let subArray = avengers[5];
// console.log(subArray[2]);
// console.log(avengers[5][2])

// console.log('Hello, ${avengers[0]} .Hello, ${avengers[5][0]}`);


/* 
    ? Reference

    -Important to note, when an array is created, it is being stored in memory
    -Assigning a new variable to initial array will reference the same array in memory
    -It can be important when working with immutable data, that we do not alter things in which or where they originate
*/

let myPubInfo = ["Bianca", 26];

let myPrivateInfo = myPubInfo; // ["bianca", 26]

let socialSec = "555-55-555";

myPrivateInfo.push(socialSec);

// console.log(myPrivateInfo);

// console.log(myPubInfo); //! Has social sec # in it

//? Array Methods
//  *Push(item to add to the end of the array)
let food = ["pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

food.push("Pizza");
console.log("PUSH", food);

//* .splice (target position, how many removed, replaced with what)
food.splice(1, 1, "Tacos")
console.log("PUSH", food);

food.splice(1,0, "steak");
console.log("SPLICE 2", food);

//* .slice()
let sliced = food.slice (1,3);
// console.log(sliced);
console.log("SLICE:" ,sliced);

//* .pop() -Removes the last item in an array
food .pop();
console.log("POP:", food);

//* .shift()- Removes item from the beginning of the array
food.shift();
console.log("SHIFT:", food);

//* .unshift() - Add item to the beginning from the array 
food.unshift("Hamburger", "salad");
console.log("UNSHIFT:", food);

//* .tostring();

let rgb = ["red", "green", "blue"];
console.log(typeof rgb.toString());




