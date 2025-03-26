// Promises

const fs = require("fs");
const path = require("path");



let fileName = "read.md";
let pathName = path.join(__dirname,fileName);

// CRUD Opration on read.md file



// Create
// fs.promises.writeFile(pathName, "# Hello I am initial Data", "utf-8")
// .then(()=>{
//     console.log("File Has Been Created");
// })
// .catch((err) => {
//     console.log("The problem is ", err.message);
// })


// Read
// fs.promises.readFile(pathName, "utf-8")
// .then((data) => {
//     console.log(data);
// })


// Update
// fs.promises.appendFile(fileName, "\n # Hello I am Updated Data", "utf-8")
// .then(()=>{
//     console.log("Data has been Append"); 
// })


// Delete
// fs.promises.unlink(pathName)
// .then(()=>{
//     console.log("File Has Been Deleted");
// })





// rename file read.mc into read.txt
// let newPathName = path.join(__dirname, "read.txt")
// fs.promises.rename(pathName, newPathName)
// .then(()=>{
//     console.log("File Name Has Been Changed");
// })