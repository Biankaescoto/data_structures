//? Objects

let marvelHero = {
    fullName: "Peter Parker",
    codeName: "Spider-Name",
    age: 25,
    active: true,
};

/* 
?   Object Literal
        When our values are written within our keys
            -Are HardCoded

? Structure

    Keyword objectName = {
        key: value
    }

        *Objects are considered  Dictionaries
*/

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
//? Dot notation
// console.log(theSimpsons.genre); // animated
//? Square notation
// console.log(theSimpsons["genre"]); //animated

// console.log(theSimpsons.season["season one"]);
console.log(theSimpsons["seasons"]["season one"][0].episode_title); // "Simpsons Roasting on an open fire"

theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

// console.log(theSimpsons)
/* 
    -Use an array method to add another character to the character array
    -console.log just the character from the Simpsons object

*/
    // First challenge i get with out help yay
    theSimpsons.characters.push("bob");
    // console.log(theSimpsons.characters);

    theSimpsons.currently_running = false;
    console.log(theSimpsons);

    /*        Challenge
            -Navigate to season one, episode 2, and change the date to the reflect a date of '1990-01-14'
    */
   
// let preDate = theSimpsons.seasons //go back and insert rest of info from lecture vid

     console.log[theSimpsons.seasons["season one"][1].aired = "1990-01-14"];

     console.log(theSimpsons.seasons["season one"]);