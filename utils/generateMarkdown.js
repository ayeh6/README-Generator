function renderLicenseSection(license) {
    const licenseList = [
        {
            name: 'Apache 2.0',
            markdown: '',
        },
        {
            name: 'Boost Software License 1.0',
            markdown: '',
        },
        {
            name: 'BSD 3-Clause License',
            markdown: '',
        },
        {
            name: 'BSD 2-Clause License',
            markdown: '',
        },
        {
            name: 'Eclipse Public License 1.0',
            markdown: '',
        },
        {
            name: 'GNU GPL v3',
            markdown: '',
        },
        {
            name: 'GNU GPL v2',
            markdown: '',
        },
        {
            name: 'GNU AGPL v3',
            markdown: '',
        },
        {
            name: 'GNU LGPL v3',
            markdown: '',
        },
        {
            name: 'GNU FDL v1.3',
            markdown: '',
        },
        {
            name: 'Hippocratic License 2.1',
            markdown: '',
        },
        {
            name: 'Hippocratic License 3.0',
            markdown: '',
        },
        {
            name: 'IBM Public License 1.0',
            markdown: '',
        },
        {
            name: 'ISC License',
            markdown: '',
        },
        {
            name: 'MIT License',
            markdown: '',
        },
        {
            name: 'Mozilla Public License 2.0',
            markdown: '',
        },
        {
            name: 'Unlicense',
            markdown: '',
        }
    ];

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
        # ${data.title}
    `;
}

module.exports = generateMarkdown;
