// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [
    {
        message: `Please enter project title:`,
        name: 'title',
        type: 'input',
    },
    {
        message: `Please enter description of project:`,
        name: 'description',
        type: 'input',
    },
    {
        message: `Please enter installation instructions:`,
        name: 'installation',
        type: 'input',
    },
    {
        message: `Please enter usage information:`,
        name: 'usage',
        type: 'input',
    },
    {
        message: `Please choose a license:`,
        name: 'license',
        type: 'list',
        choices: [
            'Apache 2.0',
            'Boost Software License 1.0',
            'BSD 3-Clause License',
            'BSD 2-Clause License',
            'Eclipse Public License 1.0',
            'GNU GPL v3',
            'GNU GPL v2',
            'GNU AGPL v3',
            'GNU LGPL v3',
            'GNU FDL v1.3',
            'Hippocratic License 2.1',
            'Hippocratic License 3.0',
            'IBM Public License 1.0',
            'ISC License',
            'MIT License',
            'Mozilla Public License 2.0',
            'Unlicense'
        ]
    },
    {
        message: `Please enter contribution guidelines:`,
        name: 'contribution',
        type: 'input',
    },
    {
        message: `Please enter test instructions:`,
        name: 'testing',
        type: 'input',
    },
    {
        message: `Please enter your GitHub username:`,
        name: 'git-username',
        type: 'input',
    },
];
const titles = [`Project`, `Description`, `Installation`, `Usage`, `License`, `Contributing`, `Tests`];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(data), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('success');
    });
}

function promptUser() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        //writeToFile('README.md',answers);
    }).catch((error) => {
        if (error.isTtyError) {

        }
        else {

        }
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log('a program');
    promptUser();
}

// Function call to initialize app
init();
