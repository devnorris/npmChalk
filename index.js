var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + " , this is a " + chalk.red("test!");
console.log(message);