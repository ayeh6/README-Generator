# Project Name - change to the name of your project

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Walkthrough Video](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge of this assignment is to create a README generator using node and the inquirer package for prompting the user.

### User Story

AS A developer  
I WANT a README generator  
SO THAT I can quickly create a professional README for a new project  

### Acceptance Criteria

GIVEN a command-line application that accepts user input  
WHEN I am prompted for information about my application repository  
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
WHEN I enter my project title  
THEN this is displayed as the title of the README  
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions  
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests  
WHEN I choose a license for my application from a list of options  
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under  
WHEN I enter my GitHub username  
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile  
WHEN I enter my email address  
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions  
WHEN I click on the links in the Table of Contents  
THEN I am taken to the corresponding section of the README  

### Walkthrough Video

[Video Link](https://drive.google.com/file/d/15SQFfurqskW5ukiBDokk5fgiaDmZtTcN/view?usp=sharing)

### Links

- Solution URL: [Github Repository](https://github.com/ayeh6/README-Generator)

## My process

### Built with

- Node
- inquirer

### What I learned

This project was the first one where I used the built in array functions instead of having to use a for-loop to find an element linearly. This code snippet below shows how I was able to find the right license using the built in .find method.
```js
function renderLicenseSection(license) {
    const licenseList = [
        {
            name: 'Apache 2.0',
            markdown: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        },
        ...
        {
            name: 'Unlicense',
            markdown: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
        }
    ];
    const output = licenseList.find(e => e.name === license);
    return output.markdown;
}
```

### Continued development

As for continued development, I would like to have the questions be dynamic and have the option to skip certain questions. This would be useful for making these README files since they are significantly different from a normal project README.

### Useful resources

- [Markdown License Badges Repo](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#file-license-badges-md) - This resource helped with having the markdown formatted for many licenses.
- [Choose A License](https://choosealicense.com/) - This resource helped with showing which licences are most useful and most common.

## Author

- Website - [Andrew Yeh](https://ayeh6.github.io/Yeh-Andrew-Portfolio-Website/)
- LinkedIn - [/in/ayeh6](https://www.linkedin.com/in/ayeh6/)
