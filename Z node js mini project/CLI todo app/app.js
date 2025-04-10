import readline from "readline";
import chalk from "chalk";


const redMsg = chalk.red;
const blueMsg = chalk.blue.bold;
const yellowMsg = chalk.yellow;
const greenMSg = chalk.green.bold;


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});




let todo_lists = [];



function showMenu(){
    console.log(yellowMsg("\n1: add task)"));
    console.log(yellowMsg("2: view task"));
    console.log(yellowMsg("3: exit"));

    rl.question(`${blueMsg("Choose Option : ")}`, handelInput);
}


const handelInput = (option) => {
    if(option === "1"){
        rl.question("Enter your task : ", (task) => {
            todo_lists.push(task);
            console.log(greenMSg("Task has been added !"));
            console.log("\n===========================");
            showMenu()
        }); 
    }
    else if(option === "2"){
        todo_lists.forEach((e, i) => {
            console.log(`\nTask ${i+1} : ${e}`);
        });
        console.log("\n===========================");
        showMenu();
    }
    else if(option === "3"){
        console.log(`Good Bye !`);
        rl.close();
    }
    else{
        console.log(redMsg("Unexpected Command !"))
        console.log("\n===========================");
        showMenu();
    }
};

showMenu()