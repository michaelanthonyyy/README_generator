const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your projects name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please write a short description of your project',
            name: 'project',
        },
        {
            type: 'list',
            message: 'What kind of license does your project use?',
            name: 'license',
            choices: ['MIT License', 'APACHE License 2.0', 'GNU General Public License v3.0']
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'dependencies',
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'repoinfo',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributing',
        }
    ])
    .then((data) => {
        const readMe = 'README1.MD';
        writeFileAsync(readMe, `
# ${data.name}

## Summary
${data.project}
<br>
<br>

## Repository Information
${data.repoinfo}
<br>
<br>

## What commands are needed to run dependencies
${data.dependencies}

<br>
<br>

## What commands are needed to run tests
${data.tests}

<br>
<br>

# How to contribute to repository
${data.contributing}

## Author

- [Link to Github](https://github.com/${data.username})
- [Email](${data.email})

<br>
<br>

## LICENSES
${data.license}          
`)
})