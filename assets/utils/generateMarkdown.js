// function to generate markdown for README
const licenseLinks = {
    'MIT': "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    'MPL 2.0': "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    'PDDL': "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
    'ODbl': "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
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