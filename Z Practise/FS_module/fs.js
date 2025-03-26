const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");



let fileName = "user.json";
let pathName = path.join(__dirname,fileName);

let userData = {
    fName : "daksh",
    lName : "kishore",
    age : 17
}

let uploadData = JSON.stringify(userData);
fs.writeFileSync(pathName, `JSON DATA 1 ${uploadData}`, "utf-8");       // create

fs.readFileSync(pathName, "utf-8")                                      // read

fs.appendFileSync(pathName, `\n JSON DATA 1 ${uploadData}`, "utf-8")    // update

fs.unlinkSync(pathName)                                                 // delete

let newPathName = path.join(__dirname,"main.json")
fs.renameSync(pathName,newPathName)                                     // rename file