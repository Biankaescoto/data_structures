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
    characters: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
    currently_running:true,
};

let {characters, seasons} = theSimpsons;

characters.push("Moe")

// console.log(theSimpsons);

let { currently_running: on_air } = theSimpsons;

// console.log(on_air); //on_air isa representation of the value that exists within the currently_running key

// let on_air2 = theSimpsons.currently_running; 

// console.log(on_air2);


//? Spread with Objects

let simpsonCharacters = {
    simpsonHouse: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
    moesTavern: ["Moes", "Barney"],
};

let generalLocations = {
    park: "statue",
    beach: "dock",
    lake: "3 eyes fish",
};

let locations = {
    ...simpsonCharacters,
    dmv: ["patty", "Selma",]
    .generalLocations
};

console.log(locations);

console.log(locations.simpsonHouse);

theSimpsons = {
    ...theSimpsons,
    locations: {...locations}
};

console.log(locations)
