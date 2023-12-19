// 12-18-23 class slide notes

// function getPoemTitle (authorUserSelected) {
//     let poemTitlesByAuthor = {
//         "Robert Frost": "Stopping by Woods on a Snowy Evening",
//         "Bob Silver": "Falling Up",
//         "Sylvia Plath": "The Bell Jar",
//     };

//     return poemTitlesByAuthor[AuthorUserSelected];
// }

// console.log(getPoemTitle("Robert Frost"));



// second example
// let states = {
//     green: ["yellow"],
//     yellow: ["red"],
//     red: ["green"],

// };

// let currentState = "green";

// function enterState(newState) {
//     let validTransitions = states[currentState];
//     if(validTransitions.includes(newState)){
//         currentState = newState;
//         console.log("The state has changed to:", currentState);

//     } else {
//         throw ("Invalid state transition attempted from" + currentState + "to" + newState
//         );
//     }
// }
// enterState("yellow");
// enterState("green");


class Animal {
    constructor(name,color) {
        this.name = name;
        this.color = color;
    }

    sleep(){
        return `${this.name} is going to sleep......`;

    }

    describe(){
        return `Hi there, I am ${this.name}, my color is ${this.color} !`;
    }
}

// const monkey = new Animal("monkey", "tan"); // const assigns value to keys in constructor

// // console.log(monkey.sleep());
// console.log(monkey.describe());


class Dog extends Animal {
    constructor(name,color) {
        super(name,color);
    }

    // .sleep() //? Method comes from parent class

    describe () {
        return `A ${this.color} colored dog names ${this.name} says woof!`;
    }

}

const doggy = new Dog ("fido", "brown");
const monkey = new Animal("Curious George", "brown");

console.log(doggy.describe());
console.log(monkey.describe());