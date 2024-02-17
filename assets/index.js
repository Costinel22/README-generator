const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project in a few words?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps do I have to follow to install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give me some instructions how to use it, for example?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should the project have?',
    },
    {
        type: 'input',
        name: 'icontributing',
        message: 'How could anyone contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Give me some instructions how to use it, for example?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'If you have questions I am more that hapy to try to answer?',
    }
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {

}

// function call to initialize program
init();