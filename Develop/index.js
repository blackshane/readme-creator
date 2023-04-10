// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter instillation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message:'Please enter usage information'
    },
    {
        type: 'input',
        name: 'contribution',
        message:'Please enter contribution guidelines'
    },
    {
        type: 'input',
        name: 'test',
        message:'Please enter test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message:'Please select license from list',
        choices: [
            "MIT",
            "Apache-2.0",
            "GPL-3.0"
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }

];

inquirer
    .prompt(questions) 
    .then((data) => {
    init(data);
    }); 
  

// // TODO: Create a function to initialize app
function init(data) {
    const markdownText = markdown.generateMarkdown(data);
    fs.writeFile('../README.md', markdownText, (err) => {
        err ? console.error(err) : console.log('Commit logged!')
       });
    };
