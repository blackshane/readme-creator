//  Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache-2.0":
      return "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL-3.0":
      return "[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
}


function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT]](https://opensource.org/licenses/MIT)";
    case "Apache-2.0":
      return "[![License: Apache-2.0]](https://opensource.org/licenses/Apache-2.0)";
    case "GPL-3.0":
      return "[![License: GPL-3.0]](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
}


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`;
    case "Apache-2.0":
      return `
## License

This project is licensed under the Apache License, Version 2.0 - see the [LICENSE](LICENSE) file for details.`;
    case "GPL-3.0":
      return `
## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.`;
    default:
      return "";
  }
}

//  Create a function to generate markdown for README
function generateMarkdown(data) {
  const tableOfContents = [];
    // Push each section with a name property to the table of contents
    if (data.install) tableOfContents.push({ name: 'Installation', link: '#install' });
    if (data.usage) tableOfContents.push({ name: 'Usage', link: '#usage' });
    if (data.contribution) tableOfContents.push({ name: 'Contribution', link: '#contribution' });
    if (data.test) tableOfContents.push({ name: 'Tests', link: '#test' });
    if (data.license) tableOfContents.push({ name: 'License', link: '#license' });
    if (data.github) tableOfContents.push({ name: 'Questions', link: '#questions' });

    const tocMarkdown = `
## Table of Contents

${tableOfContents.map(section => `- [${section.name}](${section.link})`).join('\n')}
`;

  return `${renderLicenseBadge(data.license)}
  # ${data.title}
  ${data.description}
  ## Instillation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributions 
  ${data.contributions}
  ## Testing
  ${data.test}
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}
## Questions
You can find my GitHub at (https://github.com/${data.github}).
My email address is ${data.email}. You can reach me there with additional questions. 
 
${tocMarkdown}
`;
 
}

module.exports = {
  generateMarkdown,
}
