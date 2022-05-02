// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// questions : Title of project, description -> installation instructions, usage info, contribut guideline, test instructions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?: (REQUIRED)",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log("Please enter your project's title");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please describe your project: (REQUIRED)",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        console.log("Please give your project a description");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please give usage information:",
  },
  {
    type: "checkbox",
    name: "license",
    message:
      "Please select which license(s) that your project uses: (select all that apply)",
    choices: [
      "Apache",
      "Boost",
      "BSD",
      "Eclipse",
      "GNU",
      "IBM",
      "ISC",
      "MIT",
      "Mozilla",
      "SIL",
      "Unlicense",
    ],
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions:",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username: (REQUIRED)",
    validate: (github) => {
      if (github) {
        return true;
      } else {
        console.log("Please enter your username");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address: (REQUIRED)",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please enter your email");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${fileName}`, data, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      resolve({
        ok: true,
        message: "File created",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((data) => generateMarkdown(data))
    .then((markdown) => writeToFile("README.md", markdown));
}

// Function call to initialize app
init();
