// TODO: Create a function that returns a license badge based on which license is passed in
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
