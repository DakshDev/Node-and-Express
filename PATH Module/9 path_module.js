let path = require("path");

// console.log(__dirname); // directory path
// console.log(__filename) // full path of the file

let pathName = __dirname;
console.log(pathName);

let jsonFilePath = path.join(pathName,"user.json").basename;
console.log(path.dirname(pathName)) // this
console.log(path.basename(pathName)) // this
console.log(path.extname(pathName)) // this
console.log(path.parse(pathName)); // all that method is here
console.log(path.sep) 