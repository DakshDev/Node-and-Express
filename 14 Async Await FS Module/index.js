const path = require("path");
const fs = require("fs");




let fileName = "asyncFile.txt";
let filePath = path.join(__dirname, fileName);



// this you can create read update delete and more thing using async await
const createFile = async () => {
    try {
        await fs.writeFileSync(filePath, "i am initial text", "utf-8");
        console.log("File Has Been Created");
        
    } catch (error) {
        console.log("Catch find the error : ", error.message);
    }
}
createFile();