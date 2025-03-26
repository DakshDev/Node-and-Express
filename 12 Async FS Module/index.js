
// ASYNC Way to CRUD and etc

const { error } = require("console");
const fs = require("fs");
const path = require("path");



let fileName = "user.json";
let filePath = path.join(__dirname,fileName)


fs.writeFile(filePath, `{"daksh": "Kishore"}`, "utf-8", (err)=>{
    if(err) console.error(err);

    else console.log("File Has been Created");

})

console.log("First I run")
