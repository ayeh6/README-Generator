function renderLicenseSection(license) {
    const licenseList = [
        {
            name: 'Apache 2.0',
            markdown: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        },
        {
            name: 'Boost Software License 1.0',
            markdown: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        },
        {
            name: 'BSD 3-Clause License',
            markdown: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        },
        {
            name: 'BSD 2-Clause License',
            markdown: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
        },
        {
            name: 'Eclipse Public License 1.0',
            markdown: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        },
        {
            name: 'GNU GPL v3',
            markdown: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        },
        {
            name: 'GNU GPL v2',
            markdown: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
        },
        {
            name: 'GNU AGPL v3',
            markdown: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        },
        {
            name: 'GNU LGPL v3',
            markdown: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
        },
        {
            name: 'GNU FDL v1.3',
            markdown: '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)',
        },
        {
            name: 'Hippocratic License 2.1',
            markdown: '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)',
        },
        {
            name: 'Hippocratic License 3.0',
            markdown: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)',
        },
        {
            name: 'IBM Public License 1.0',
            markdown: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
        },
        {
            name: 'ISC License',
            markdown: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        },
        {
            name: 'MIT License',
            markdown: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        },
        {
            name: 'Mozilla Public License 2.0',
            markdown: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        },
        {
            name: 'Unlicense',
            markdown: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
        }
    ];
    const output = licenseList.find(e => e.name === license);
    return output.markdown;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
Notices: This application is covered under ${data.license} ${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.testing}

## Questions
[Github Profile](https://github.com/${data.github})  
If you have any questions, reach out to me at ${data.email}
    `;
}

module.exports = generateMarkdown;

/*
resources:
    https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba#the-hippocratic-license-30
    https://choosealicense.com/
*/