const fs = require("fs");
const path = require("path");



let fileName = "read.md";
let pathName = path.join(__dirname,fileName);

// CRUD Opration on read.md file



// Create
// fs.writeFileSync(pathName, "# Hello I am initial Data", "utf-8");
// console.log("File Has Been Created");


// Read
// console.log(fs.readFileSync(pathName, "utf-8"));


// Update
// fs.appendFileSync(fileName, "\n # Hello I am Updated Data", "utf-8")
// console.log("File Has Been Updated");


// Delete
// fs.unlinkSync(fileName)
// console.log("File Has Been Deleted");




// rename file read.md into read.txt
// let newPathName = path.join(__dirname, "read.txt")
// fs.renameSync(pathName, newPathName)


// read directory           // condition
// fs.readdir(__dirname, (err, data) => {
//     console.log(data);
// })












// Bonus = check file exist
try {
    fs.accessSync("read.md")
    console.log("Exist");
} catch (error) {
    console.log("No Exist");
}