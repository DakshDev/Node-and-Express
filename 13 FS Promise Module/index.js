const path = require("path");
const fs = require("fs");

// There are two way to write fs promises
    // require("fs/promises");
    // fs.promises




// TASK
// create user.json file and add userObject on user.json file
// read user.json file after created
// update userObject and append on user.json file
// all task done then rename user.json file into clientData.json
// last check how much file in the directory folder and delete clientData.json







let userObject = {
    fName: "daksh",
    lName: "kishore",
    age: 16,
}
const fileName = "user.json";
let filePath = path.join(__dirname, fileName);





// Create File Using Promises                       //  TASK 1
function createFile(){
    fs.promises.writeFile(filePath, `${JSON.stringify(userObject)}`, "utf-8")
    .then(()=>{
        // if file is created the read it           //  TASK 2
        fs.promises.readFile(filePath, "utf-8")
        .then(data => console.log("Read user.json file ", data))
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}


// Update file and append "HELLO" text File Using Promises           //  TASK 3
let wanttToUpdate = false;
if(wanttToUpdate){
    fs.promises.readFile(filePath, "utf-8")
    .then(data => {
        let parseData = JSON.parse(data);
        parseData.fName = "krrish";
        parseData.age = 19;

        fs.promises.writeFile(filePath, `${JSON.stringify(parseData)}`, "utf-8")
        .then(()=>{
            console.log("Data has been Updated");

        })
    })
}


// rename file user.json file into clientData.json           //  TASK 3
let wantRenameFile = false;
if(wantRenameFile){
  let newFileName = "clientData.json";
  let newPathName = path.join(__dirname,newFileName);
  fs.promises.rename(filePath, newPathName)
}


// delete file user.json or clientData.json           //  TASK 4
fs.promises.unlink(filePath)









// read directory           // condition
fs.readdir(__dirname, (err, data) => {
    if(err) return;

    if(data.includes(fileName)){
        // console.log("File Is Already Been Created !");
        return;
    }
    createFile();
    console.log("File Is Created Successfully !");
})