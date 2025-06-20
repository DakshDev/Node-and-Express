const path = require("path");
const fs = require("fs");
const EmitterEvent = require("events");
let emitter = new EmitterEvent();


let userDetails = {
    userLogin : 0,
    userLogout : 0,
    userPurchased : 0,
    userUpdate : 0,
}



// add userDetails on another file for backup
let fileName = "userData.json";
let pathName = path.join(__dirname, fileName);
function firstTimeCreateFile(){
    fs.writeFileSync(pathName, `${JSON.stringify(userDetails)}`, "utf-8");
}
let condition = fs.readdirSync(__dirname).includes(fileName);

if(!condition){
    firstTimeCreateFile();
}




class updateUserData{

    constructor(data){
        this.dataUpdate = data;
    }

    execute(){
        let fetchData = fs.readFileSync(pathName, "utf-8");
        let updatesUserData = JSON.parse(fetchData);

        if(this.dataUpdate === "login") updatesUserData.userLogin++;
        if(this.dataUpdate === "logout") updatesUserData.userLogout++;
        if(this.dataUpdate === "purchased") updatesUserData.userPurchased++;
        if(this.dataUpdate === "update") updatesUserData.userUpdate++;
        
        // console.log(updatesUserData);
        
        fs.writeFileSync(pathName, `${JSON.stringify(updatesUserData)}`, "utf-8");
    }
}




// Listener
// emitter.on("user-login", (username)=>{
//     new updateUserData("login").execute();
//     console.log(`${username} is login`);
// });

// emitter.on("user-logout", (username)=>{
//     new updateUserData("logout").execute();
//     console.log(`${username} is logout`);
// });

// emitter.on("user-purchased", (username, purchased)=>{
//     new updateUserData("purchased").execute();
//     console.log(`${username} buy a new ${purchased}`);
// });

// emitter.on("profile-update", (username, update)=>{
//     new updateUserData("update").execute();
//     console.log(`${username} update ${update}`);
// });




emitter.on("summary", ()=>{
    let fetcDataFromJson = fs.readFileSync(pathName, "utf-8");
    let raw = JSON.parse(fetcDataFromJson);
    console.log(raw);
});






// target

emitter.emit("user-login", "Daksh");
emitter.emit("user-logout", "Daksh");
emitter.emit("user-purchased", "Daksh", "BMW");
emitter.emit("profile-update", "Daksh", "email");
emitter.emit("summary");