const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    }, {
        type: 'input',
        name: 'description',
        message: 'Please describe the project in a few words?',
    }, {
        type: 'input',
        name: 'installation',
        message: 'What steps do I have to follow to install the project?',
    }, {
        type: 'input',
        name: 'usage',
        message: 'Give me some instructions how to use it, for example?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0', 'ODbL'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How could anyone contribute to this project?',
    }, {
        type: 'input',
        name: 'tests',
        message: 'Give me some instructions how to use it, for example?',
    }, {
        type: 'input',
        name: 'userName',
        message: 'Wath is you github user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Wath is you email?',
    },
];



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(error) {
        if (error) {
            return console.log(error);
        }
        console.log("Now you hawe a nice readme!");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', data);
        });
}
// function call to initialize program
init();