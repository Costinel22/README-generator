// function to generate markdown for README
const licenseLinks = {
    'MIT': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    'GPL': 'http://perso.crans.org/besson/LICENSE.html',
    'CC--0': 'https://creativecommons.org/licenses/by-nd/4.0',
    'ODbL': `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`
};


const licenseBadge = (license) => {
    return license ? licenseLinks[license] : '';
}
const licenses = (license) => {
    return `${license}`
}
var generateMarkdown = (data) => {
    return `# ${data.title}

    ${licenseBadge(data.license)}

  ## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${licenses(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have some questions, please use the following contact options!
  * GitHub user name:[${data.userName}](https://www.github.com/${data.userName})
  * Contact Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;