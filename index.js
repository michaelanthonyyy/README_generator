const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

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
            type: 'checkbox',
            message: 'What kind of license should your project have?',
            name: 'license',
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
        fs.writeFile(readMe, `
        # ${data.name}

## Summary
${data.project}
<br>
<br>

## Repository Information
${data.repoinfo}
<br>
<br>
## Built With



<br>
<br>

## Deployed Link


<br>

## Authors

- [Link to Github](https://github.com/${data.username})
- [Email](${data.email})

<br>
<br>

## LICENSES
${data.license}
        
        
        
        `)
    })