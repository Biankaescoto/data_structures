const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const ask = (questionText) => new Promise ((resolve,reject) => rl.question(questionText + "\n", (input) => input.length > 0 ? resolve(input) : reject("provide input")
)
);

// We "shaved this off in class"
// const start = async () => {
//     try {
//     const response = await ask ("Hey how are ya?");
//     console.log(response);
//     } catch (err) {
//         console.log("Error:" err);
//     }
// };

// start();   

let validInvCommands = ["i", "inventory", "items", "inv"];

let inventory = {
    sword: {
        name: "Excalibur",
        description: "A sword pulled from stone",
        look(){
            console.log(`${this.name} ⚔️:`);
            return this.description;
        },
    },

    axe: {
        name: "Mighty battle axe of Doom!",
        description: "Great battle axe of Doom!",
        look(){
            console.log(`${this.name} 🪓:`);
            return this.description;
        },
        swing() {
            // some other FUNCTIONality -> player attacks a target (would prob pass in a target as a param/arg)
            return `You swing the ${this.name}`;
        },
    },
    potion: {
        name: "Hp potion!",
        description: "Potion to restore hp",
        drink(){
            return t`You drink the ${this.name}`
        },
    },
};


const showInventory = () => {
console.log("---------");
console.log("Inventory:");
Object.keys(inventory).forEach((item) =>{
    console.log(item + ":", inventory[item].name);
})
};

const interact = (action, target) => {
    if (inventory[action]){
        console.log("Available Actions");
    
    if(validInvCommands.includes(action)) {
        showInventory();
        return;
    }
}
}

if (validInvCommands.includes(action)) {
    showInventory();
    return;
}



const validItem = inventory[target];
        
        // const validAction = inventory[target][action]; //! Error on in valid items, - cannot read properties of undefined
        const validAction = inventory[target]?.[action];
        // console.log({ validAction}) need rest of this
        if (validAction && typeof validAction === "function") {
            console.log("Action can be done 👍");
            if(validItem) {
                console.log("Item was found 👍");
                console.log(inventory[target][action]());
            } else {
                console.log("Item not found :(");
            }
        } else {
            console.log(`Are you crazy?! You cannot ${action} a ${target}`);
        }


// interact("drink", "hp_potion");

const start = async () => {
    try {
        let response;
        while(response !== "exit"){
            response = await ask("What do you want to do?");

        let splitResponse = response.split(" ");
        // console.log({splitResponse});
        // let action = splitResponse[0];
        // let target = splitResponse[1];
        // console.log(action);

        //?OR

        let [action, target] = split.Response;

        if (action && target) {
            //User provided 2 word input
            interact(action,target);
        } else if (action){
            //handle single input
            interact
        }

        }   
    process.exit();
}   catch (err) {
    console.log(err);
    await start();
    }
};

start();