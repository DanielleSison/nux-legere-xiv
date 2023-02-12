// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Provide your project title."
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Which dependencies do you need to install?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this repository?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this repository?"
    },
    {
        type: "list",
        name: "license",
        message: "What license are you utilizing?",
        choices: ["MIT", "Apache_2.0", "BSD_2-", "BSD_3-", "Boost_1.0" ,"CC0_1.0", "EPL_2.0", "NONE"]
    },
    {
        type: "input",
        name: "contributors",
        message: "List down the contributors in this repository."
    },
    {
        type: "input",
        name: "test",
        message: "What should be written into the terminal / command line to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this repository?"
    },
    {
        type: "input",
        name: "github",
        message: "Provide your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Provide your e-mail for further questions about the repository."
    },

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Generating README file.")
            writeToFile("./sample/README.md", generateMarkdown({ ... inquirerAnswers}));
        })
}

// Function call to initialize app
init();
