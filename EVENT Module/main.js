const EventEmitter = require("events")


// Create an Instamce of EventEmitter
let emitter1 = new EventEmitter()




// 1. Define an event Listner using (addEventListner or on)
emitter1.on("greet", (name)=>{
    console.log(`Emitter is triggered by ${name}`);
     
});

// 2. Target (emit) the "greet" event
emitter1.emit("greet","Sync Coder")