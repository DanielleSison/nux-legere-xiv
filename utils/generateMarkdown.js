// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-lightblue.svg)`
  }
  return ''
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`

    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${renderLicenseBadge(data.license)}

    ## Description

    ${data.description}

    ## Table of Contents

    * [Installations](#installation)
    * [Usage](#usage)
    ${renderLicenseLink(data.license)}
    * [Contributors](#contributors)
    * [Test](#test)
    * [Questions](#questions)

    ## Installations

    Please install dependencies within the terminal by typing the following in the command line:

    \`\`\`
    ${data.installation}
    \`\`\`

    ## Usage

    ${data.usage}

    ${renderLicenseSection(data.license)}

    ## Contributors

    ${data.contributors}

    ## Questions

    If you have any questions, please contact me at ${data.email}

    GitHub URL: [${data.github}](https://github.com/${data.github}/)

    ## Tests

    To run tests, please type the following in the command line:

    \`\`\`
    ${data.test}
    \`\`\`

    `;
}

module.exports = generateMarkdown;
