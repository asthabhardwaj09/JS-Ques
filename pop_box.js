// type of pop-up box

const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
console.log("Hello " + name);


// const prompt = require("prompt-sync")();

let answer = prompt("Are you sure you want to delete? (yes/no): ");

// if(answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {

if(answer === "yes" || answer === "y") {
  console.log("User pressed OK");
} else {
  console.log("User pressed Cancel");
}

console.log("This is an alert box!");


