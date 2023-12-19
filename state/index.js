let stateMachine = {
    state: "liquid",
    emoji: "💧",
    transitions: {
        liquid: {
            vaporize(){
                this.state = "gas";
                this.emoji = "☁️";
            },
            freeze(){
                this.state = "solid";  
                this.emoji = "🪨";              
            },
        },

        solid: {
            melt(){
        this.state = "solid";
        this.emoji = "🪨";
        },
    },
       
        gas: {
            condense(){
            this.state = "liquid";
            this.emoji = "💧";
            },

        },
    },

dispatcher(actionName){
    const action = this.transitions[this.state][actionName];
    //  console.log("is action valid?" action);
    if (action) {
        let previous = this.state;   
        console.log(`${actionName} on ${this.state}`);
        action.call(this);     
        console.log(`changed ${previous} to ${this.state} ${this.emoji}`);
    } else {
        console.log(" Invalid action");
        console.log(`You cannot ${actionName} a ${this.state}`);
        // action.call(this);
    }
    
  },
};


const myUniqueObject = Object.create(stateMachine);

myUniqueObject.dispatcher("freeze");
myUniqueObject.dispatcher("freeze");
myUniqueObject.dispatcher("melt");



// console.log(Object.getPrototypeOf(myUniqueObject));
// console.log(myUniqueObject);