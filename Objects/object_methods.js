// copy of first index JS but this is Methods
//objects equal filing systems

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
        "season one" : [
            {
                episode_title: "Simpson roasting on an open fire",
                aired: "1989-12-17",
            },
            {
                episode_title: "Bart the Genius",
                aired: "1990-01-01",
            }
        ],
        "season two": [
            // .....
        ],
        "season three": [
            // .....
        ],
    },
    currently_running:true,
};

/* 
? Object.keys()
    -Returns back an array  of keys
*/

console.log(Object.keys(theSimpsons));

let list_keys = Object.keys(theSimpsons);

/* 
    ? Object.value()
        -Returns back an array of values
*/

// console.log(Object.values(theSimpsons.season));

/* 
    ? Object.assign()
    -copies all enumerable properties from one or more sources
*/

let obj1 = { name: "Bob", age: 50};
let obj2 = {work: "Manager"};

let newObject = Object.assign(obj1, obj2);

console.log(newObject);

let copyOfSimpsons = Object.assign(theSimpsons);

console.log(copyOfSimpson);

//? delete object.key

delete theSimpsons.currently_running;

console.log(theSimpsons);


/* 
? Object.freeze()
*/

Object.freeze(theSimpsons);

theSimpsons.id = 2;
theSimpsons.est = 45987347894357

console.log(theSimpsons);




