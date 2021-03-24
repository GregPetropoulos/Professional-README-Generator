// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = "./utils/generateMarkdown.js";
// const prompt = require('prompts');

// TODO: Create an array of questions for user input, this will get called by prompt method
const questions = [
  {
    type: "input",
    message: "What is your project Title?",
    name: "Project Title",
  },
  {
    type: "input",
    message: "What is a short description?",
    name: "Description",
  },
  {
    type: "input",
    message: "What are the steps required to install",
    name: "Installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples",
    name: "Usage",
  },
  {
    type: "input",
    message: "List the collaborators, such as links, profiles, tutorials, APIs",
    name: "Credits",
  },
  {
    type: "list",
    message: "What kind of license do you want?",
    name: "License",
    choices: ["MIT", "APACHE 2.0", "ISC", "NONE"],
  },
  {
    type: "input",
    message: "List all the features",
    name: "Features",
  },
];

// TODO: Create a function to write README file, will place this in function init
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  // prompt method calls in array of questions
  inquirer
    .prompt(questions)
    // promise, answers function takes answer responses and writes to readme
    .then((answers) => {
      const response = generateMarkdown(answers);
      fs.writeToFile("./README.md", response);
    });
}

// Function call to initialize app
init();
